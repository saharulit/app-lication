import { AppliedJob } from 'src/core/entities/appliedJob';
import { AppliedJobAdapter } from '../../adapters/job/appliedJob-adapter';

export class AppliedJobService {
  constructor(private adapter: AppliedJobAdapter) {}
  appliedJobList(search?: string) {
    return this.adapter.appliedJobList(search);
  }
  addApplication(job: AppliedJob): Promise<{ success: boolean }> {
    return this.adapter.addApplication(job);
  }
}
