import React from 'react';
import styled from '@emotion/styled';

import { usePosts, actions } from '@ns/redux/redux-posts';
import Layout from '@ns/layouts/main-layout';
import PageSEO from '@ns/components/page-seo';
import Container from '@ns/components/container';
import Loading from '@ns/components/loading';
import Link from '@ns/components/link';
import theme from '@ns/theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  padding-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const PostsPage = () => {
  const { posts, isLoading } = usePosts();

  return (
    <Layout>
      <PageSEO title="Posts" />
      <Container>
        <H1>Posts</H1>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <ul>
              {posts.map((post, i) => (
                <li key={i}>
                  <StyledLink href="/posts/[slug]" as={`/posts/${post.id}`}>
                    {post.title}
                  </StyledLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Layout>
  );
};

PostsPage.getInitialProps = async ({ store }) => {
  const state = store.getState();

  if (typeof state.posts.result === 'undefined') {
    await store.dispatch(actions.fetchPosts());
  }

  return {};
};

export default PostsPage;
