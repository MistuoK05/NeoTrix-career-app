import React, { useState } from 'react';
import { evaluateTask } from './geminiService';

const ConceptDiagnostic = ({ userData, onFinish, onBack }) => {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
 const [feedback, setFeedback] = useState(""); // Add this state

const handleSubmit = async () => {
  setLoading(true);
  const result = await evaluateTask('diagnostic', { answers });
  setFeedback(result.feedback); // Store feedback
  setTimeout(() => onFinish(result.score), 3000); // Give user time to read feedback
};

  const questions = [
    { id: 'math', q: "Explain the Chain Rule in your own words." },
    { id: 'algo', q: "Why is ReLU preferred over Sigmoid in deep networks?" }
  ];

  
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-3xl backdrop-blur-3xl bg-white/5 border border-white/20 p-10 rounded-[3rem]">
        <h2 className="text-2xl font-black text-green-400 mb-8 uppercase tracking-widest">Diagnostic Mode</h2>
        <div className="space-y-6">
          {questions.map((item) => (
            <div key={item.id} className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">{item.q}</label>
              <textarea 
                onChange={(e) => setAnswers({...answers, [item.id]: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-green-500 transition-all"
              />
            </div>
          ))}
          <button onClick={handleSubmit} disabled={loading} className="w-full py-5 bg-green-500 text-black font-black rounded-3xl uppercase tracking-widest transition-all hover:scale-[1.02]">
            {loading ? "GEMINI IS EVALUATING..." : "Submit for Gap Analysis"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptDiagnostic;