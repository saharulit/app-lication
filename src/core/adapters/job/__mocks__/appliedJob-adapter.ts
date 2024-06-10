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
      logo: 'https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1631311446380?e=1725494400&v=beta&t=iY8gYqbPBFYsBQpFE43252ex5iAab_wVs4n0ASruxbE',
    },
    applicationLink: 'https://google.com',
    applicationDate: new Date(),
    status: JobStatus.REJECTED,
  },
  {
    id: '2',
    title: 'Frontend Developer 12 3 media hi ff f f f ffff 2 3 4 5 6 1 2 3 4',
    description: 'Develop frontend solutions',
    company: {
      id: '2',
      userId: '1',
      name: 'Facebook',
      description:
        'Social media platform for connecting people with friends and family online. Founded by Mark Zuckerberg in 2004 at Harvard University.',
    },
    applicationLink: 'https://facebook.com',
    applicationDate: new Date(),
    status: JobStatus.HIRED,
  },
  {
    id: '2',
    title: 'Frontend Developer 12 3 media hi ff f f f ffff 2 3 4 5 6 1 2 3 4',
    description: 'Develop frontend solutions',
    company: {
      id: '2',
      userId: '1',
      name: 'Facebook',
      description:
        'Social media platform for connecting people with friends and family online. Founded by Mark Zuckerberg in 2004 at Harvard University.',
    },
    applicationLink: 'https://facebook.com',
    applicationDate: new Date(),
    status: JobStatus.APPLIED,
  },
  {
    id: '2',
    title: 'Frontend Developer 12 3 media hi ff f f f ffff 2 3 4 5 6 1 2 3 4',
    description: 'Develop frontend solutions',
    company: {
      id: '2',
      userId: '1',
      name: 'Facebook',
      description:
        'Social media platform for connecting people with friends and family online. Founded by Mark Zuckerberg in 2004 at Harvard University.',
    },
    applicationLink: 'https://facebook.com',
    applicationDate: new Date(),
    status: JobStatus.INTERVIEW,
  },
];
