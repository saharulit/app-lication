import { Card as MuiCard, CardContent, Avatar, Chip } from '@mui/material';
import { AppliedJob } from '../../core/entities/appliedJob';
import Link from '../Link/Link';

export default function Card(cardProps: AppliedJob) {
  const getChipColor = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'app-bg-gray';
      case 'Interview':
        return 'app-bg-orange';
      case 'Rejected':
        return 'app-bg-red';
      case 'Hired':
        return 'app-bg-green';
      default:
        return 'app-bg-gray';
    }
  };

  return (
    <MuiCard sx={{ minWidth: 300, minHeight: 200, borderRadius: 8 }}>
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
            label={cardProps.status}
          />
        </div>
      </CardContent>
    </MuiCard>
  );
}
