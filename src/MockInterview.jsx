import React, { useState } from 'react';
import { evaluateTask } from './geminiService';

const MockInterview = ({ userData, onFinish, onBack }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const quiz = [
    { q: "Which loss function is best for binary classification?", a: ["MSE", "Binary Cross-Entropy", "Hinge Loss"], c: 1 },
    { q: "What is 'Dropout' used for?", a: ["Faster training", "Preventing Overfitting", "Data Augmentation"], c: 1 }
  ];

  const handleAnswer = async (idx) => {
    const newAnswers = [...answers, { question: quiz[step].q, selected: quiz[step].a[idx], correct: idx === quiz[step].c }];
    
    if (step < quiz.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      setLoading(true);
      const result = await evaluateTask('interview', { results: newAnswers });
      onFinish(result.score); // Dynamic score from Gemini
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 text-white">
      {loading ? <div className="animate-pulse text-cyan-400 font-black">GEMINI IS GRADING...</div> : (
        <div className="w-full max-w-2xl backdrop-blur-3xl bg-white/5 border border-white/20 p-10 rounded-[3rem]">
          <h2 className="text-xl font-bold mb-8 text-cyan-400">AI MCQ INTERVIEW</h2>
          <p className="mb-6 text-lg">{quiz[step].q}</p>
          <div className="grid gap-4">
            {quiz[step].a.map((ans, i) => (
              <button key={i} onClick={() => handleAnswer(i)} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-cyan-500/20 text-left transition-all">{ans}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MockInterview;