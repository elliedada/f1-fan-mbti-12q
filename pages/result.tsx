
import { useRouter } from 'next/router';

const DRIVER_MAP = {
  FTLA: 'Charles Leclerc (Ferrari)',
  FTLF: 'Max Verstappen (Red Bull)',
  FSLE: 'Lewis Hamilton (Ferrari)',
  FSLA: 'Fernando Alonso (Ferrari)',
  TSLF: 'Lando Norris (McLaren)',
  TSLA: 'Yuki Tsunoda (RB)',
  // Add more types as needed
};

export default function ResultPage() {
  const router = useRouter();
  const raw = router.query.type;
  const type = Array.isArray(raw) ? raw[0] : raw || '';
  const driver = DRIVER_MAP[type] || 'Unknown Type';

  return (
    <div>
      <h1>Your MBTI Type: {type}</h1>
      <p>Recommended Driver: {driver}</p>
    </div>
  );
}
