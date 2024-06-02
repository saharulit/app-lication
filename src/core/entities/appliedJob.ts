export interface AppliedJob {
  title: string;
  description: string;
  company: Company;
  applicationLink?: string;
  applicationDate?: Date;
  status: 'applied' | 'interview' | 'rejected' | 'accepted';
  comments?: string;
}

export interface Company {
  name: string;
  description?: string;
}
