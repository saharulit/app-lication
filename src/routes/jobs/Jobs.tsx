import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppliedJob } from '../../core/entities/appliedJob';
import { jobService } from '../../core/services';
import Card from '../../components/Card/Card';
import ToolBar from './ToolBar';
import EditJobModal from './EditJobModal';

interface JobsProps {
  openEditModal?: boolean;
}

const Jobs: React.FC<JobsProps> = ({ openEditModal: openEditModel }) => {
  const [jobs, setJobs] = useState([] as AppliedJob[]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

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
      <h1 className="text-3xl font-bold">My applications</h1>
      <div className="flex flex-col gap-4">
        <ToolBar
          onSearchChange={onSearchChange}
          onAddButton={() => navigate('new')}
        />
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
      <EditJobModal open={openEditModel || false} />
    </div>
  );
};

export default Jobs;
