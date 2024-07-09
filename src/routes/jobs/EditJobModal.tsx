import React from 'react';
import Modal from '../../components/Modal/Modal';
import JobForm from './JobForm';
import Button from '../../components/Button/Button';
import { AppliedJob } from '../../core/entities/appliedJob';
import { jobService } from '../../core/services';

interface EditJobModalProps {
  open: boolean;
  onClose: () => void;
  jobId?: string | null;
}

const EditJobModal: React.FC<EditJobModalProps> = ({
  open,
  onClose,
  jobId,
}) => {
  const onSubmit = async (values: AppliedJob) => {
    console.log(values);
    await jobService.addApplication(values);
    onClose();
  };

  const handleSave = () => {
    const formik = formikRef.current;
    if (formik) {
      formik.submitForm();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formikRef = React.useRef<any>(null);
  return (
    <Modal
      open={open}
      onClose={onClose}
      header={
        <h1 className="text-xl font-bold">
          {jobId ? 'Edit application' : 'Create new application'}
        </h1>
      }
      body={
        <>
          <JobForm onSubmit={onSubmit} formikRef={formikRef} />
        </>
      }
      footer={
        <div className="flex flex-row gap-2">
          <div className="grow" />
          <Button onClick={onClose} mode="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} type="button">
            Save
          </Button>
        </div>
      }
    />
  );
};

export default EditJobModal;
