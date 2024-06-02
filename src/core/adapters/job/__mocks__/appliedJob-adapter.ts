import { AppliedJob, JobStatus } from '../../../entities/appliedJob';

export const appliedJobMock: AppliedJob[] = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Develop software solutions',
    company: {
      id: '1',
      userId: '1',
      name: 'Google',
      description: 'Search engine',
    },
    applicationLink: 'https://google.com',
    applicationDate: new Date(),
    status: JobStatus.APPLIED,
  },
  {
    id: '2',
    title: 'Frontend Developer Frontend Developer Frontend Developer',
    description: 'Develop frontend solutions',
    company: {
      id: '2',
      userId: '1',
      name: 'Facebook',
      description: 'Social media',
    },
    applicationLink: 'https://facebook.com',
    applicationDate: new Date(),
    status: JobStatus.INTERVIEW,
  },
];
