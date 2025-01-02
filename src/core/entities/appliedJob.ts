import { Company } from "./company/company";

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

export enum JobStatus {
  APPLIED = 'applied',
  INTERVIEW = 'interview',
  REJECTED = 'rejected',
  HIRED = 'hired',
}
export interface Filters {
  search?: string;
  status?: JobStatus[];
}
