import { AppliedJob } from '../../entities/appliedJob';
import { appliedJobMock } from './__mocks__/appliedJob-adapter';

export class AppliedJobAdapter {
  async appliedJobList(): Promise<AppliedJob[]> {
    //Here we would make a request to the API
    return appliedJobMock;
  }
}
