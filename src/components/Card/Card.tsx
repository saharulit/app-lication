import { Card as MuiCard, CardContent, Avatar, Chip } from '@mui/material';
import { AppliedJob, JobStatus } from '../../core/entities/appliedJob';
import Link from '../Link/Link';
import { StatusToLabel } from '../../routes/jobs/utils';

export default function Card(cardProps: AppliedJob) {
  const getChipColor = (status: string) => {
    switch (status) {
      case JobStatus.APPLIED:
        return 'app-bg-gray';
      case JobStatus.INTERVIEW:
        return 'app-bg-orange';
      case JobStatus.REJECTED:
        return 'app-bg-red';
      case JobStatus.HIRED:
        return 'app-bg-green';
      default:
        return 'app-bg-gray';
    }
  };

  return (
    <MuiCard sx={{ minWidth: 300, minHeight: 200, borderRadius: 2 }}>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Link
            mode="primary"
            size="large"
            href="#"
            target="_self"
            className="max-w-60 line-clamp-2 min-h-14"
          >
            {cardProps.title}
          </Link>
          <div className="flex flex-row items-center gap-2">
            <Avatar
              alt="company-logo"
              src={cardProps.company?.logo}
              sx={{ width: 27, height: 27 }}
            >
              <div className="text-xs font-semibold">
                {cardProps.company?.name?.charAt(0)}
              </div>
            </Avatar>
            <div className="text-xs font-semibold">
              {cardProps.company?.name}
            </div>
          </div>
          <div className="line-clamp-4 max-w-60 min-h-16">
            <p className="text-xs">{cardProps.company?.description}</p>
          </div>
          <Chip
            className={`self-end !${getChipColor(
              cardProps.status
            )} !app-color-white`}
            label={StatusToLabel(cardProps.status)}
          />
        </div>
      </CardContent>
    </MuiCard>
  );
}
