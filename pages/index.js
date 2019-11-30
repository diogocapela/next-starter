import React from 'react';
import styled from '@emotion/styled';
import Layout from '#layouts/main-layout';
import PageSEO from '#components/page-seo';
import Container from '#components/container';
import Button from '#components/button';
import Link from '#components/link';
import Input from '#components/input';
import Loading from '#components/loading';
import Select from '#components/select';
import Textarea from '#components/textarea';
import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const H3 = styled.h3`
  margin-bottom: 1rem;

  &:not(:first-of-type) {
    margin-top: 2.5rem;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <PageSEO title="Home" />
      <Container>
        <H1>Home</H1>
        <H3>Button</H3>
        <Button>Click Me</Button>
        <H3>Button as Link</H3>
        <Button as={Link} href="/about">
          About Link
        </Button>
        <H3>Input</H3>
        <Input label="Input Label" placeholder="This is the placeholder..." />
        <H3>Loading</H3>
        <Loading />
        <H3>Select</H3>
        <Select
          label="Select Label"
          options={[
            { title: 'Option A', value: 'A' },
            { title: 'Option B', value: 'B' },
            { title: 'Option C', value: 'C' },
            { title: 'Option D', value: 'D' },
          ]}
        />
        <H3>Textarea</H3>
        <Textarea label="Textarea Label" placeholder="This is the placeholder..." />
      </Container>
    </Layout>
  );
};

export default IndexPage;
