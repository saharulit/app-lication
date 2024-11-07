import { Avatar } from '@mui/material';
import { Company } from '../../core/entities/appliedJob';

interface CompanyLogoProps {
  company: Company;
}

export default function CompanyLogo({ company }: CompanyLogoProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar
        alt="company-logo"
        src={company?.logo}
        sx={{ width: 27, height: 27 }}
      >
        <div className="text-xs font-semibold">{company?.name?.charAt(0)}</div>
      </Avatar>
      <div className="text-xs font-semibold">{company?.name}</div>
    </div>
  );
}
