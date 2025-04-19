
import { useState } from 'react';
import { useRouter } from 'next/router';

const QUESTIONS = [
  { id: 1, text: 'Q1', dimension: 'F/T' },
  { id: 2, text: 'Q2', dimension: 'F/T' },
  { id: 3, text: 'Q3', dimension: 'F/T' },
  { id: 4, text: 'Q4', dimension: 'S/R' },
  { id: 5, text: 'Q5', dimension: 'S/R' },
  { id: 6, text: 'Q6', dimension: 'S/R' },
  { id: 7, text: 'Q7', dimension: 'L/F' },
  { id: 8, text: 'Q8', dimension: 'L/F' },
  { id: 9, text: 'Q9', dimension: 'L/F' },
  { id: 10, text: 'Q10', dimension: 'E/A' },
  { id: 11, text: 'Q11', dimension: 'E/A' },
  { id: 12, text: 'Q12', dimension: 'E/A' },
];

export default function Home() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < 12) {
      alert('Answer all questions');
      return;
    }

    const dimensionScores = { 'F/T': 0, 'S/R': 0, 'L/F': 0, 'E/A': 0 };
    QUESTIONS.forEach(q => {
      dimensionScores[q.dimension] += answers[q.id] === 'A' ? 1 : 0;
    });

    const result =
      (dimensionScores['F/T'] >= 2 ? 'F' : 'T') +
      (dimensionScores['S/R'] >= 2 ? 'S' : 'R') +
      (dimensionScores['L/F'] >= 2 ? 'L' : 'F') +
      (dimensionScores['E/A'] >= 2 ? 'E' : 'A');

    router.push(`/result?type=${result}`);
  };

  return (
    <div>
      <h1>F1 Fan MBTI Test</h1>
      {QUESTIONS.map(q => (
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
