import { describe, it, expect } from 'vitest';
import { AppliedJobAdapter } from './appliedJob-adapter';
import { appliedJobMock } from './__mocks__/appliedJob-adapter';

describe('appliedJob-adapter', () => {
  const instance = new AppliedJobAdapter();

  it('should return list of applied job', async () => {
    const jobList = await instance.appliedJobList();
    expect(jobList).toEqual(appliedJobMock);
  });

  it('should filter the job list based on search query', async () => {
    const searchQuery = 'Software Engineer';
    const filteredJobList = await instance.appliedJobList(searchQuery);
    const expectedJobList = appliedJobMock.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    expect(filteredJobList).toEqual(expectedJobList);
  });
});
