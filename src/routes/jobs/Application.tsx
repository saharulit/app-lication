import { useParams } from 'react-router-dom';
import { useGetAppliedJobByIdQuery } from '../../core/api/appliedJobsApi';

export const Application: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: application,
    error,
    isLoading,
  } = useGetAppliedJobByIdQuery(id || '');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching application details: {error.toString()}</div>;
  }

  if (!application) {
    return <div>No application found.</div>;
  }

  if (!id) {
    return <div>Invalid ID</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{application.title}</h1>
    </div>
  );
};
