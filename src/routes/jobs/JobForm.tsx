import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../../components/Input/Input';
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
  if (values.company && !values.company.name) {
    if (!errors.company) {
      errors.company = {
        userId: '',
        name: '',
      };
    }
    errors.company.name = 'Required';
  }
  return errors as AppliedJob;
};

interface JobFormProps {
  onSubmit: (values: AppliedJob) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formikRef: React.RefObject<any>;
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, formikRef }) => {
  return (
    <Formik
      innerRef={formikRef}
      initialValues={
        {
          title: '',
          company: { name: '' } as Company,
          status: JobStatus.APPLIED,
        } as unknown as AppliedJob
      }
      validate={validateFunction}
      onSubmit={async (values) => {
        onSubmit(values);
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <div>
            <Input
              type="text"
              name="company.name"
              onChange={handleChange}
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
              value={values.title}
              label="Job Title"
            />
            {errors.title && touched.title && errors.title}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JobForm;
