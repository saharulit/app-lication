import { SetStateAction, useEffect, useState } from 'react';
import { AppliedJob } from '../../core/entities/appliedJob';
import { jobService } from '../../core/services';
import Card from '../../components/Card/Card';
import ToolBar from './ToolBar';

export default function Jobs() {
  const [jobs, setJobs] = useState([] as AppliedJob[]);
  const [search, setSearch] = useState('');

  const onSearchChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    //TODO: Implement search using url query params
  };

  useEffect(() => {
    async function fetchData() {
      const fetchedJobs = await jobService.appliedJobList(search);
      setJobs(fetchedJobs);
    }
    fetchData();
  }, [search]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold underline">My applications</h1>
      <div className="flex flex-col gap-4">
        <ToolBar onSearchChange={onSearchChange} />
        {jobs.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {jobs.map((job, index) => (
              <Card key={`card-${index + 1}`} {...job} />
            ))}
          </div>
        ) : (
          <p className="text-lg">No jobs found</p>
        )}
      </div>
    </div>
  );
}
