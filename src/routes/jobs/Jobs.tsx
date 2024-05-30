import { useEffect, useState } from 'react';
import { AppliedJob } from '../../core/entities/appliedJob';
import { jobService } from '../../core/services';
import { Card } from '../../components/CardList';

export default function Jobs() {
  const [jobs, setJobs] = useState([] as AppliedJob[]);

  useEffect(() => {
    async function fetchData() {
      const fetchedJobs = await jobService.appliedJobList();
      setJobs(fetchedJobs);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Jobs</h1>
      {jobs.map((job, index) => (
        <Card key={index} title={job.title} description={job.description} />
      ))}
    </div>
  );
}
