import { AppliedJob } from '../../../entities/appliedJob';

export const appliedJobMock: AppliedJob[] = [
  {
    title: 'Software Engineer',
    description: 'Develop software solutions',
    company: {
      name: 'Google',
      description: 'Search engine',
    },
    applicationLink: 'https://google.com',
    applicationDate: new Date(),
  },
  {
    title: 'Frontend Developer',
    description: 'Develop frontend solutions',
    company: {
      name: 'Facebook',
      description: 'Social media',
    },
    applicationLink: 'https://facebook.com',
    applicationDate: new Date(),
  },
];
