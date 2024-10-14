import { FilterConfig } from 'src/core/hooks/useFiltes';
import { JobStatus } from '../../core/entities/appliedJob';
import { ButtonFilter } from 'src/components/Filters/ButtonsFilters';

export const statusFilter: ButtonFilter[] = [
  {
    title: JobStatus.APPLIED,
    value: JobStatus.APPLIED.toLowerCase(),
  },
  {
    title: JobStatus.HIRED,
    value: JobStatus.HIRED.toLowerCase(),
  },
  {
    title: JobStatus.INTERVIEW,
    value: JobStatus.INTERVIEW.toLowerCase(),
  },
  {
    title: JobStatus.REJECTED,
    value: JobStatus.REJECTED.toLowerCase(),
  },
];

export const jobFilterConfig: FilterConfig = {
  allowedFilters: {
    status: {
      values: [
        JobStatus.APPLIED.toLowerCase(),
        JobStatus.HIRED.toLowerCase(),
        JobStatus.INTERVIEW.toLowerCase(),
        JobStatus.REJECTED.toLowerCase(),
      ],
      validate: true,
    },
    search: {
      values: '',
      validate: false,
    },
  },
};
