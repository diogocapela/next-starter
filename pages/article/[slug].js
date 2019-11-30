import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Layout from '#layouts/main-layout';
import useNews from '#hooks/useNews';
import PageSEO from '#components/page-seo';
import Container from '#components/container';
import Loading from '#components/loading';
import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const AuthorSpan = styled.span`
  display: block;
  margin: 1rem 0;
  font-weight: bold;
`;

const ArticlePage = () => {
  const router = useRouter();
  const { news, isLoading } = useNews();

  const article = news[router.query.slug] || {};

  return (
    <Layout>
      <PageSEO title={article.title} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <H1>{article.title}</H1>
            <img src={article.urlToImage} />
            <AuthorSpan>{article.author}</AuthorSpan>
            <p>{article.content}</p>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default ArticlePage;
