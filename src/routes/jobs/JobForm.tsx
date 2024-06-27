import { Formik } from 'formik';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {
  AppliedJob,
  Company,
  JobStatus,
} from '../..//core/entities/appliedJob';

const validateFunction = (values: AppliedJob) => {
  const errors: Partial<AppliedJob> = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  return errors as AppliedJob;
};

const JobForm = () => (
  <div>
    <h1>Form</h1>
    <Formik
      initialValues={
        {
          title: '',
          company: {} as Company,
          status: JobStatus.APPLIED,
        } as unknown as AppliedJob
      }
      validate={validateFunction}
      onSubmit={(values: AppliedJob, { setSubmitting }: any) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        // handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              name="company.name"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.company.name}
              label="Company"
            />
            {errors.company?.name &&
              touched.company?.name &&
              errors.company?.name}
          </div>
          <div>
            <Input
              type="text"
              name="title"
              onChange={handleChange}
              // onBlur={handleBlur}
              value={values.title}
              label="Job Title"
            />
            {errors.title && touched.title && errors.title}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </div>
);

export default JobForm;
