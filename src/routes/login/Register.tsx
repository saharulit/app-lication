import Input from '../../components/Input/Input';
import { Formik, Form } from 'formik';
import { User } from 'src/core/entities/user/user';

  const validateFunction = (values: LogInUser) => {
    const errors: Partial<LogInUser> = {};
    if (!values.email) {
      errors.email = 'Required';
    }

    if  (!values.password) {
      errors.password = 'Required';
    }

    return errors as LogInUser;
  };

  export interface LogInUser extends User {
    password: string;
  }

  const Register: React.FC = () => {
  return (
    <>
    <div id="login-form" className=''>
    <Formik
    initialValues={
      {
        firstName: '',
        lastName: '',
        email: '',
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
      </Form>
    )}
  </Formik>
  </div>
  </>
  );
};

export default Register;
