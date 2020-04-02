import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { usePosts, actions } from '@ns/redux/redux-posts';
import Layout from '@ns/layouts/main-layout';
import PageSEO from '@ns/components/page-seo';
import Container from '@ns/components/container';
import Loading from '@ns/components/loading';
import theme from '@ns/theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const PostPage = () => {
  const router = useRouter();
  const { posts, isLoading } = usePosts();

  const { slug } = router.query;

  useEffect(() => {
    if (!posts[slug]) {
      router.push('/');
    }
  }, [posts, slug, router]);

  const post = posts[slug] || {};

  return (
    <Layout>
      <PageSEO title={post.title} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <H1>{post.title}</H1>
            <p>{post.body}</p>
          </div>
        )}
      </Container>
    </Layout>
  );
};

PostPage.getInitialProps = async ({ store }) => {
  const state = store.getState();

  if (typeof state.posts.result === 'undefined') {
    await store.dispatch(actions.fetchPosts());
  }

  return {};
};

export default PostPage;
