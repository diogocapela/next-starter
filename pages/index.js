import React from 'react';
import styled from '@emotion/styled';

import Layout from '@ns/layouts/main-layout';
import PageSEO from '@ns/components/page-seo';
import Container from '@ns/components/container';
import Checkbox from '@ns/components/checkbox';
import Button from '@ns/components/button';
import Link from '@ns/components/link';
import Input from '@ns/components/input';
import Loading from '@ns/components/loading';
import Select from '@ns/components/select';
import Textarea from '@ns/components/textarea';

const H3 = styled.h3`
  margin-bottom: 0.75rem;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <PageSEO />
      <Container>
        <H3>Button</H3>
        <Button>Click Me</Button>
        <H3>Button as Link</H3>
        <Button as={Link} href="/about">
          About Link
        </Button>
        <H3>Select</H3>
        <Select
          options={[
            { title: 'Option A', value: 'A' },
            { title: 'Option B', value: 'B' },
            { title: 'Option C', value: 'C' },
            { title: 'Option D', value: 'D' },
          ]}
        />
        <H3>Input</H3>
        <Input placeholder="Enter text" type="text" />
        <H3>Textarea</H3>
        <Textarea placeholder="This is the placeholder" />
        <H3>Checkbox</H3>
        <Checkbox />
        <H3>Loading</H3>
        <Loading />
      </Container>
    </Layout>
  );
};

export default IndexPage;
