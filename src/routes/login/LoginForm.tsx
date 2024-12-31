import Input from '../../components/Input/Input';
import { Formik, Form } from 'formik';
import { User } from 'src/core/entities/user/user';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../core/contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const validateFunction = (values: LogInUser) => {
  const errors: Partial<LogInUser> = {};
  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors as LogInUser;
};

export interface LogInUser extends User {
  password: string;
}

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState<string | null>(null);

  const signIn = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      navigate('/jobs');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setLoginError('Invalid credentials');
      } else {
        setLoginError('Error logging in');
      }
    }
  };

  return (
    <>
      <div id="login-form" className="">
        <div className="pb-16">
          <h1 id="title" className="font-bold text-3xl">
            Hey there!
          </h1>
          <div className="font-semibold text-xl">
            Ready to take control of your job search?
          </div>
        </div>
        <Formik
          initialValues={
            {
              email: 'Admin',
              password: 'Admin',
            } as unknown as LogInUser
          }
          validate={validateFunction}
          onSubmit={signIn}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <div className="flex flex-col gap-4">
                <div>
                  <Input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    label="Email"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red text-sm">{errors.email}</div>
                  )}
                </div>
                <div>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    label="Password"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red text-sm">{errors.password}</div>
                  )}
                </div>
              </div>
              {loginError && <div className="text-red">{loginError}</div>}
              <div className="pt-5">
                <a
                  href="/forgot-password"
                  className="text-blue-500 underline hover:underline"
                >
                  Forgot Password
                </a>
                <div className="pt-5">
                  <Button type="submit" className="w-full pt-5">
                    Login
                  </Button>
                </div>
                <div className="flex pt-5">
                  <div className="pr-2"> Don't have an account? </div>
                  <Link to="/register" className="text-blue hover:underline">
                    Register
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
