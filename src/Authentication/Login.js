import React from 'react';
import Container from '../components/Container';
import SocialLogin from '../components/SocialLogin';
import Button from '../components/Button';
import { Box, Text } from '../components/theme';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Checkbox';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('Sign Up!')}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text variant="button" marginLeft="s" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{footer}}>
      <Box padding="xl">
        <Text variant="title1" marginBottom="l">Welcome back</Text>
        <Text variant="body" textAlign="center" marginBottom="l">Use the credentials below and login to your account</Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: '', password: '', remember: true }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput icon="mail" placeholder="Enter your Email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} error={errors.email} touched={touched.email} />
              </Box>
              <TextInput icon="lock" placeholder="Enter your Password" onChangeText={handleChange('password')} onBlur={handleBlur('password')} error={errors.password} touched={touched.email} />
              <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                <Box flex={1}>
                  <Checkbox label="Remember Me" checked={values.remember} onChange={() => setFieldValue('remember', !values.remember)} />
                </Box>
                <Box flex={1} overflow='hidden'>
                  <Button variant="transparent" onPress={() => true}>
                    <Text color='primary'>Forgot Password</Text>
                  </Button>
                </Box>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button variant="primary" onPress={handleSubmit} label="Log into your account" />
              </Box>
            </Box>
          )}
        </Formik>
        
      </Box>
    </Container>
  );
}

export default Login;