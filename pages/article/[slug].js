import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { useNews } from '../../redux/redux-news';

import PageSEO from '../../components/page-seo';
import Container from '../../components/container';
import Loading from '../../components/loading';

import theme from '../../theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const AuthorSpan = styled.span`
  display: block;
  margin: 1rem 0;
  font-weight: bold;
`;

function Article() {
  const router = useRouter();
  const { news, isLoading, loadNews } = useNews();

  const article = news[router.query.slug] || {};

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <Container>
      <PageSEO title="Article" />
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
  );
}

export default Article;
