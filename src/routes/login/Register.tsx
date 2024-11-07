import Input from "../../components/Input/Input";
import { Formik, Form } from "formik";
import { User } from "src/core/entities/user/user";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useAuth } from '../../core/contexts/authContext';
import { useNavigate } from 'react-router-dom';

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

const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div id="login-form" className="">
        <Formik
          initialValues={
            {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            } as unknown as LogInUser
          }
          validate={validateFunction}
          onSubmit={async (values) => {
            await register(values.firstName, values.lastName, values.email, values.password);
            navigate('/jobs');
          }}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <div>
                <Input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  label="First Name"
                />
                {errors.firstName && touched.firstName}
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  label="Last Name"
                />
                {errors.lastName && touched.lastName}
              </div>
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
              <div className="flex pt-5">
                <div className="pr-2">Already have an account? </div>
                <Link
                  to="/login"
                  className="text-blue hover:underline"
                >
                  Login
                </Link>
              </div>
              <div className="pt-5">
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
