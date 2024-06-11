import { AppliedJobAdapter } from '../../adapters/job/appliedJob-adapter';

export class AppliedJobService {
  constructor(private adapter: AppliedJobAdapter) {}
  appliedJobList(search?: string) {
    return this.adapter.appliedJobList(search);
  }
}
