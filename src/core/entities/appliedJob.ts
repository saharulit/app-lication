export interface AppliedJob {
  title: string;
  description: string;
  company: Company;
  applicationLink?: string;
  applicationDate?: Date;
}

export interface Company {
  name: string;
  description?: string;
}
