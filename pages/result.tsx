
import { useRouter } from 'next/router';

const DRIVER_MAP = {
  FTLA: 'Charles Leclerc / Ferrari',
  FTLF: 'Max Verstappen / Red Bull',
  FSLE: 'Lewis Hamilton / Ferrari',
  FSLA: 'Fernando Alonso / Ferrari',
  // ... fill in other 12 types later
};

export default function ResultPage() {
  const router = useRouter();
  const type = router.query.type || '';

  return (
    <div>
      <h1>Your Type: {type}</h1>
      <p>{DRIVER_MAP[type] || 'Coming soon...'}</p>
    </div>
  );
}
