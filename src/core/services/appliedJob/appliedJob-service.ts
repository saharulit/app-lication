import { AppliedJobAdapter } from '../../adapters/job/appliedJob-adapter';

export class AppliedJobService {
  constructor(private adapter: AppliedJobAdapter) {}
  appliedJobList() {
    return this.adapter.appliedJobList();
  }
}
