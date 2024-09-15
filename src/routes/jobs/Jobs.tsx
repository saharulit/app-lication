import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card/Card';
import ToolBar from './ToolBar';
import EditJobModal from './EditJobModal';
import { useGetAppliedJobsQuery } from '../../core/api/appliedJobsApi';
import { AppliedJob } from 'src/core/entities/appliedJob';

interface JobsProps {
  openEditModal?: boolean;
}

const Jobs: React.FC<JobsProps> = ({ openEditModal }) => {
  const [, setSearch] = useState('');
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);

  const { data, error, isLoading } = useGetAppliedJobsQuery();

  // useEffect(() => {
  //   fetch('https://app-lication-server.vercel.app/api/applied-jobs', {
  //     method: 'GET',
  //     credentials: 'include', // Include cookies in the request
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.message))
  //     .catch((error) => console.error('Error:', error));
  // }, []);

  // Update the state when the data changes
  useEffect(() => {
    if (data) {
      setAppliedJobs(data);
    }
  }, [data]);

  // Helper function to get token from cookie
  const getTokenFromCookie = () => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];
    console.log(`Token: ${token}`);
    return token;
  };

  const test = async () => {
    // Get the token from the cookie
    const token = getTokenFromCookie();

    // Make the fetch request and add the token to the Authorization header
    fetch('https://app-lication-server.vercel.app/api/applied-jobs', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token manually
        'Content-Type': 'application/json', // Optional: Include if you're sending JSON
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error('Error:', error));
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // TODO: Implement search using URL query params
  };
  const addOrUpdateJobInList = (updatedJob: AppliedJob) => {
    const prevJob = appliedJobs.find((item) => item._id === updatedJob._id);
    let newJobList: AppliedJob[] = [];

    if (prevJob) {
      // Update the job in the list
      newJobList = appliedJobs.map((item) =>
        item._id === updatedJob._id ? updatedJob : item
      );
    } else {
      // Add the new job to the list
      newJobList = [...appliedJobs, updatedJob];
    }

    setAppliedJobs(newJobList);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My applications</h1>
      <button onClick={test}>GET DATA</button>
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
        onSave={addOrUpdateJobInList}
      />
    </div>
  );
};

export default Jobs;
