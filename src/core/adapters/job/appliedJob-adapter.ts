import { AppliedJob } from '../../entities/appliedJob';
import { appliedJobMock } from './__mocks__/appliedJob-adapter';

export class AppliedJobAdapter {
  async appliedJobList(search?: string): Promise<AppliedJob[]> {
    //Here we would make a request to the API
    if (search) {
      return appliedJobMock.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return appliedJobMock;
  }
  async addApplication(job: AppliedJob): Promise<{ success: boolean }> {
    appliedJobMock.push(job);
    return { success: true };
  }
}
