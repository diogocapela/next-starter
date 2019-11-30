import React from 'react';
import styled from '@emotion/styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import useAuth from '#hooks/useAuth';
import validationUtils from '#utils/validation';
import Input from '#components/input';
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
  password: validationUtils.password,
});

const LoginForm = () => {
  const { login } = useAuth();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
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
            />
            <ErrorSpan>{errors.email && touched.email && errors.email}</ErrorSpan>
            <StyledInput
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorSpan>{errors.password && touched.password && errors.password}</ErrorSpan>
            <StyledButton type="submit" disabled={isSubmitting}>
              Login
            </StyledButton>
            <Span>
              <Link href="/">Forgot your password?</Link>
            </Span>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
