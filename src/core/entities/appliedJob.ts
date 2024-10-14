export interface AppliedJob {
  _id?: string;
  title: string;
  description?: string;
  company: Company;
  applicationLink?: string;
  applicationDate?: Date;
  status: JobStatus;
  comments?: string;
}

export interface Company {
  _id?: string;
  userId: string; // ??
  name: string;
  description?: string;
  logo?: string;
}

export enum JobStatus {
  APPLIED = 'Applied',
  INTERVIEW = 'Interview',
  REJECTED = 'Rejected',
  HIRED = 'Hired',
}

export interface Filters {
  searchTerm?: string;
  status?: JobStatus[];
}
