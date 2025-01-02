import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import Input from '../../components/Input/Input';
import { AppliedJob, JobStatus } from '../..//core/entities/appliedJob';
import { Autocomplete, Item } from '../../components/Autocomplete/Autocomplete';
import { useGetCompaniesQuery } from '../../core/api/companyApi';
import { Company } from 'src/core/entities/company/company';

interface JobFormProps {
  onSubmit: (values: AppliedJob) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formikRef: React.RefObject<any>;
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, formikRef }) => {
  const [companyQuery, setCompanyQuery] = useState('');
  const { data: companies } = useGetCompaniesQuery(companyQuery);
  const companySearch = (e) => {
    setCompanyQuery(e);
  };
  const companySelection = (selectedCompany: Item) => {
    console.log(selectedCompany);
    // עדכון השדות של החברה ב-Formik
    formikRef.current?.setFieldValue('company', {
      name: selectedCompany.name,
      description: selectedCompany.description || '',
      domain: selectedCompany.domain || '',
      logo: selectedCompany.iconUrl || '',
    });
  };
  const validateFunction = (values: AppliedJob) => {
    const errors: Partial<AppliedJob> = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (values.company && !values.company.name) {
      if (!errors.company) {
        errors.company = {
          name: '',
        };
      }
      errors.company.name = 'Required';
    }
    return errors as AppliedJob;
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={
        {
          title: '',
          company: {
            name: '',
            description: '',
            domain: '',
            logo: '',
          } as Company,
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
            <Autocomplete
              items={
                companies?.map((company) => ({
                  ...company,
                  iconUrl: company.logo,
                  id: company.domain,
                })) || ([] as Item[])
              }
              handleSearch={companySearch}
              handleOnSelect={companySelection}
            />
            {errors.company?.name &&
              touched.company?.name &&
              errors.company?.name}
          </div>
          <div>
            <Input
              type="text"
              name="company.description"
              onChange={handleChange}
              value={values.company.description}
              label="Company Description"
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
