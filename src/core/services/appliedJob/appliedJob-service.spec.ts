import { describe, it, expect, vi } from 'vitest';
import { AppliedJobAdapter } from '../../adapters/job/appliedJob-adapter';
import { AppliedJobService } from './appliedJob-service';

describe('AppliedJobService', () => {
  const mockAdapter = {
    appliedJobList: vi.fn(),
  } as unknown as AppliedJobAdapter;

  const service = new AppliedJobService(mockAdapter);

  it('should call to adapter', async () => {
    await service.appliedJobList();
    expect(mockAdapter.appliedJobList).toHaveBeenCalledWith(undefined);
  });

  it('should call to adapter with search query', async () => {
    const searchQuery = 'Software Engineer';
    await service.appliedJobList(searchQuery);
    expect(mockAdapter.appliedJobList).toHaveBeenCalledWith(searchQuery);
  });
});
