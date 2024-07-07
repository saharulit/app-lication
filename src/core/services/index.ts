import { AuthAdapter } from '../adapters/auth/auth-adapter';
import { AppliedJobAdapter } from '../adapters/job/appliedJob-adapter';
import { AppliedJobService } from './appliedJob/appliedJob-service';
import { AuthService } from './auth/auth-service';

const jobAdapter = new AppliedJobAdapter();
const authAdapter = new AuthAdapter();

export const jobService = new AppliedJobService(jobAdapter);
export const authService = new AuthService(authAdapter);
