import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { useNews } from '../redux/redux-news';

import PageSEO from '../components/page-seo';
import Container from '../components/container';
import Loading from '../components/loading';
import Link from '../components/link';

import theme from '../theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

function Articles() {
  const { news, isLoading, loadNews } = useNews();

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <Container>
      <PageSEO title="News" />
      <H1>News</H1>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ul>
            {Object.values(news).map((article, i) => (
              <li key={i}>
                <Link href="/article/[slug]" as={`/article/${article.slug}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default Articles;
