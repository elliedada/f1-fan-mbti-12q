
import { useState } from 'react';
import { useRouter } from 'next/router';

const QUESTIONS = [
  { id: 1, text: 'You prefer structured plans over spontaneity.', dimension: 'F/T' },
  { id: 2, text: 'You make decisions based on logic.', dimension: 'F/T' },
  { id: 3, text: 'You trust data more than feelings.', dimension: 'F/T' },
  { id: 4, text: 'You enjoy sensory-rich environments.', dimension: 'S/R' },
  { id: 5, text: 'You rely on concrete facts.', dimension: 'S/R' },
  { id: 6, text: 'You focus on what is rather than what could be.', dimension: 'S/R' },
  { id: 7, text: 'You think long-term in your approach.', dimension: 'L/F' },
  { id: 8, text: 'You prefer depth over speed.', dimension: 'L/F' },
  { id: 9, text: 'You like to analyze deeply.', dimension: 'L/F' },
  { id: 10, text: 'You get energy from others.', dimension: 'E/A' },
  { id: 11, text: 'You like fast-paced environments.', dimension: 'E/A' },
  { id: 12, text: 'You act on impulse.', dimension: 'E/A' },
];

export default function Home() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < 12) {
      alert('Please answer all questions.');
      return;
    }

    const scores = { 'F/T': 0, 'S/R': 0, 'L/F': 0, 'E/A': 0 };
    QUESTIONS.forEach(q => {
      scores[q.dimension] += answers[q.id] === 'A' ? 1 : 0;
    });

    const result =
      (scores['F/T'] >= 2 ? 'F' : 'T') +
      (scores['S/R'] >= 2 ? 'S' : 'R') +
      (scores['L/F'] >= 2 ? 'L' : 'F') +
      (scores['E/A'] >= 2 ? 'E' : 'A');

    router.push(`/result?type=${result}`);
  };

  return (
    <div>
      <h1>F1 Fan MBTI Test</h1>
      {QUESTIONS.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          <button onClick={() => handleAnswer(q.id, 'A')}>A</button>
          <button onClick={() => handleAnswer(q.id, 'B')}>B</button>
        </div>
      ))}
      <button onClick={handleSubmit}>See Result</button>
    </div>
  );
}
