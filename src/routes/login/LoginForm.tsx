import Input from "../../components/Input/Input";
import { Formik, Form } from "formik";
import { User } from "src/core/entities/user/user";
import Button from "../../components/Button/Button";

const validateFunction = (values: LogInUser) => {
  const errors: Partial<LogInUser> = {};
  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors as LogInUser;
};

export interface LogInUser extends User {
  password: string;
}

const LoginForm: React.FC = () => {
  return (
    <>
      <div id="login-form" className="">
        <Formik
          initialValues={
            {
              firstName: "",
              lastName: "",
              email: "",
            } as unknown as LogInUser
          }
          validate={validateFunction}
          onSubmit={async () => {
            // onSubmit(values);
          }}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <div>
                <Input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  label="Email"
                />
                {errors.email && touched.email}
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  label="Password"
                />
                {errors.password && touched.password}
              </div>
              <div className="pt-5">
                <a
                  href="/forgot-password"
                  className="text-blue-500 underline hover:underline"
                >
                  Forgot Password
                </a>
                <div className="pt-5">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
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
