import { FilterConfig } from 'src/core/hooks/useFiltes';
import { JobStatus } from '../../core/entities/appliedJob';
import { ButtonFilter } from '../../components/Filters/ButtonsFilters';
import { StatusToLabel } from './utils';

export const statusFilter: ButtonFilter[] = [
  {
    title: StatusToLabel(JobStatus.APPLIED),
    value: JobStatus.APPLIED,
  },
  {
    title: StatusToLabel(JobStatus.HIRED),
    value: JobStatus.HIRED,
  },
  {
    title: StatusToLabel(JobStatus.INTERVIEW),
    value: JobStatus.INTERVIEW,
  },
  {
    title: StatusToLabel(JobStatus.REJECTED),
    value: JobStatus.REJECTED,
  },
];

export const jobFilterConfig: FilterConfig = {
  allowedFilters: {
    status: {
      values: statusFilter.map((status) => {
        return status.value;
      }),
      validate: true,
    },
    search: {
      values: '',
      validate: false,
    },
  },
};
