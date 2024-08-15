import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card/Card';
import ToolBar from './ToolBar';
import EditJobModal from './EditJobModal';
import { useGetAppliedJobsQuery } from '../../core/api/appliedJobsApi';

interface JobsProps {
  openEditModal?: boolean;
}

const Jobs: React.FC<JobsProps> = ({ openEditModal }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const { data: appliedJobs = [], error, isLoading } = useGetAppliedJobsQuery();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // TODO: Implement search using URL query params
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My applications</h1>
      <div className="flex flex-col gap-4">
        <ToolBar
          onSearchChange={onSearchChange}
          onAddButton={() => navigate('new')}
        />
        {isLoading ? (
          <p className="text-lg">Loading jobs...</p>
        ) : error ? (
          <p className="text-lg text-red-500">Error loading jobs.</p>
        ) : appliedJobs.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {appliedJobs.map((job, index) => (
              <Card key={`card-${index + 1}`} {...job} />
            ))}
          </div>
        ) : (
          <p className="text-lg">No jobs found</p>
        )}
      </div>
      <EditJobModal
        open={openEditModal || false}
        onClose={() => navigate('/jobs')}
      />
    </div>
  );
};

export default Jobs;
