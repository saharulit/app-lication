import { AppliedJobAdapter } from '../adapters/job/appliedJob-adapter';
import { AppliedJobService } from './appliedJob/appliedJob-service';

const jobAdapter = new AppliedJobAdapter();

export const jobService = new AppliedJobService(jobAdapter);
