import { Filters } from 'src/core/entities/appliedJob';

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
