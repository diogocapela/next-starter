import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Layout from '#layouts/main-layout';
import usePosts from '#hooks/usePosts';
import PageSEO from '#components/page-seo';
import Container from '#components/container';
import Loading from '#components/loading';
import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const P = styled.p``;

const PostPage = () => {
  const router = useRouter();
  const { posts, isLoading } = usePosts();

  const post = posts[router.query.slug] || {};

  return (
    <Layout>
      <PageSEO title={post.title} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <H1>{post.title}</H1>
            <P>{post.body}</P>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default PostPage;
