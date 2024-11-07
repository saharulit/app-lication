import { Filters, JobStatus } from '../../core/entities/appliedJob';

export const createQueryString = (filters?: Filters) => {
  if (!filters) return;
  const params = new URLSearchParams();

  if (filters.search) {
    params.set('search', filters.search);
  }

  if (filters.status && filters.status.length > 0) {
    params.set('status', filters.status.join(','));
  }

  return params.toString();
};

export const StatusToLabel = (status: JobStatus): string => {
  switch (status) {
    case JobStatus.APPLIED:
      return 'Applied';
    case JobStatus.HIRED:
      return 'Hired';
    case JobStatus.INTERVIEW:
      return 'Interview';
    case JobStatus.REJECTED:
      return 'Rejected';
    default:
      return '';
  }
};
