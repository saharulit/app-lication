export interface AppliedJob {
  id: string;
  title: string;
  description?: string;
  company: Company;
  applicationLink?: string;
  applicationDate?: Date;
  status: JobStatus;
  comments?: string;
}

export interface Company {
  id: string;
  userId: string;
  name: string;
  description?: string;
}

export enum JobStatus {
  APPLIED = 'applied',
  INTERVIEW = 'interview',
  REJECTED = 'rejected',
  ACCEPTED = 'accepted',
}
