import React from 'react';
import styled from '@emotion/styled';
import Layout from '#layouts/main-layout';
import PageSEO from '#components/page-seo';
import Container from '#components/container';
import Checkbox from '#components/checkbox';
import Button from '#components/button';
import Link from '#components/link';
import Input from '#components/input';
import Loading from '#components/loading';
import Select from '#components/select';
import Textarea from '#components/textarea';

const H3 = styled.h3`
  margin-bottom: 0.75rem;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <PageSEO title="Home" />
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
        <H3>Disabled Select</H3>
        <Select disabled options={[{ title: 'Option A', value: 'A' }]} />
        <H3>Input Text</H3>
        <Input placeholder="Enter text" type="text" />
        <H3>Input Number</H3>
        <Input placeholder="Enter number" type="number" />
        <H3>Input Email</H3>
        <Input placeholder="Enter email" type="email" />
        <H3>Input Password</H3>
        <Input placeholder="Enter password" type="password" />
        <H3>Required Input</H3>
        <Input placeholder="Required" required />
        <H3>Disabled Input</H3>
        <Input placeholder="Disabled" disabled />
        <H3>Textarea</H3>
        <Textarea placeholder="This is the placeholder" />
        <H3>Required Textarea</H3>
        <Textarea placeholder="Required" required />
        <H3>Disabled Textarea</H3>
        <Textarea placeholder="Disabled" disabled />
        <H3>Checkbox</H3>
        <Checkbox />
        <H3>Loading</H3>
        <Loading />
      </Container>
    </Layout>
  );
};

export default IndexPage;
