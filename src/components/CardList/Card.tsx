import {
  Card as MuiCard,
  CardContent,
} from '@mui/material';

interface CardProps {
  title: string;
  description: string;
}

export default function Card(cardProps: CardProps) {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardContent>
        <h2>{cardProps.title}</h2>
        <p>{cardProps.description}</p>
      </CardContent>
    </MuiCard>
  );
}
