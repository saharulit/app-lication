// Jobs.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import ToolBar from './ToolBar';
import EditJobModal from './EditJobModal';
import { useGetAppliedJobsQuery } from '../../core/api/appliedJobsApi';
import { AppliedJob } from 'src/core/entities/appliedJob';
import { jobFilterConfig, statusFilter } from './FiltersConfig'; // Import your filter configuration
import useFilters from '../..//core/hooks/useFiltes';

const Jobs: React.FC<{ openEditModal?: boolean }> = ({ openEditModal }) => {
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);

  const { data, error, isLoading } = useGetAppliedJobsQuery();
  const { activeFilters, addFilter, removeFilter } = useFilters({
    config: jobFilterConfig,
  });

  useEffect(() => {
    if (data) {
      setAppliedJobs(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    if (newSearchTerm) {
      addFilter('search', newSearchTerm);
    } else {
      removeFilter('search', '');
    }
  };

  const addOrUpdateJobInList = (updatedJob: AppliedJob) => {
    const prevJob = appliedJobs.find((item) => item._id === updatedJob._id);
    let newJobList: AppliedJob[] = [];

    if (prevJob) {
      newJobList = appliedJobs.map((item) =>
        item._id === updatedJob._id ? updatedJob : item
      );
    } else {
      newJobList = [...appliedJobs, updatedJob];
    }

    setAppliedJobs(newJobList);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My applications</h1>
      <div className="flex flex-col gap-4">
        <ToolBar
          searchTerm={activeFilters.search as string}
          activeFilters={activeFilters}
          onSearchChange={onSearchChange}
          onAddFilter={addFilter}
          onRemoveFilter={removeFilter}
          onAddButton={() => navigate('new')}
          filters={statusFilter}
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
        onSave={addOrUpdateJobInList}
      />
    </div>
  );
};

export default Jobs;
