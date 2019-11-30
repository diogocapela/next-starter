import React from 'react';
import styled from '@emotion/styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import useAuth from '#hooks/useAuth';
import validationUtils from '#utils/validation';
import Input from '#components/input';
import Checkbox from '#components/checkbox';
import Button from '#components/button';
import Link from '#components/link';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const ErrorSpan = styled.span`
  margin: 0.5rem 0;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 0.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 3rem;
  margin-bottom: 0.75rem;
`;

const Span = styled.span`
  text-align: center;
  color: #878c9a;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const validationSchema = yup.object().shape({
  email: validationUtils.email,
  firstName: validationUtils.firstName,
  password: validationUtils.password,
});

const RegisterForm = () => {
  const { register } = useAuth();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await register(values);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        password: '',
        acceptsMarketing: false,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <StyledInput
              placeholder="Email address"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
            />
            <ErrorSpan>{errors.email && touched.email && errors.email}</ErrorSpan>
            <StyledInput
              placeholder="Name"
              name="firstName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              required
            />
            <ErrorSpan>{errors.firstName && touched.firstName && errors.firstName}</ErrorSpan>
            <StyledInput
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
            />
            <ErrorSpan>{errors.password && touched.password && errors.password}</ErrorSpan>
            <StyledButton type="submit" disabled={isSubmitting} loading={isSubmitting}>
              Create my Account
            </StyledButton>
            <Span>
              By signing up you agree to the{' '}
              <Link href="/terms" target="_blank">
                terms of use
              </Link>{' '}
              and{' '}
              <Link href="/privacy" target="_blank">
                privacy policy
              </Link>
              .
            </Span>
            <Span>
              <StyledCheckbox
                name="acceptsMarketing"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.acceptsMarketing}
              />
              I want to get occasional updates on important stuff.
            </Span>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
