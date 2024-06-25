import { describe, it, expect, vi } from 'vitest';
import { AppliedJobAdapter } from '../../adapters/job/appliedJob-adapter';
import { appliedJobMock } from '../../adapters/job/__mocks__/appliedJob-adapter';
import { AppliedJobService } from './appliedJob-service';

describe('AppliedJobService', () => {
  const mockAdapter = {
    appliedJobList: vi.fn(),
  } as unknown as AppliedJobAdapter;

  const service = new AppliedJobService(mockAdapter);

  it('should return list of applied jobs', async () => {
    const jobList = await service.appliedJobList();
    expect(jobList).toEqual(appliedJobMock);
    expect(mockAdapter.appliedJobList).toHaveBeenCalledWith(undefined);
  });

  it('should return filtered list of applied jobs based on search query', async () => {
    const searchQuery = 'Software Engineer';
    const filteredJobList = appliedJobMock.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const jobList = await service.appliedJobList(searchQuery);
    expect(jobList).toEqual(filteredJobList);
    expect(mockAdapter.appliedJobList).toHaveBeenCalledWith(searchQuery);
  });
});
