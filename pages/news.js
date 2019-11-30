import React from 'react';
import styled from '@emotion/styled';
import Layout from '#layouts/main-layout';
import useNews from '#hooks/useNews';
import PageSEO from '#components/page-seo';
import Container from '#components/container';
import Loading from '#components/loading';
import Link from '#components/link';
import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const NewsPage = () => {
  const { news, isLoading } = useNews();

  return (
    <Layout>
      <PageSEO title="News" />
      <Container>
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
    </Layout>
  );
};

export default NewsPage;
