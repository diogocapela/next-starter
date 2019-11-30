import React from 'react';
import styled from '@emotion/styled';
import Layout from '#layouts/main-layout';
import PageSEO from '#components/page-seo';
import Container from '#components/container';
import Loading from '#components/loading';
import Link from '#components/link';
import { useSelector } from 'react-redux';
import theme from '#theme';
import { loadPosts } from '#redux/redux-posts/actions';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const PostsPage = () => {
  const posts = useSelector(state => state.posts.result);
  const isLoading = useSelector(state => state.posts.isLoading);

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
                  <Link href="/posts/[slug]" as={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
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
    await store.dispatch(loadPosts());
  }

  return {};
};

export default PostsPage;
