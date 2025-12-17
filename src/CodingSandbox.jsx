import React, { useState } from 'react';
import { evaluateTask } from './geminiService';

const CodingSandbox = ({ userData, onFinish, onBack }) => {
  const [code, setCode] = useState(`# Implement a simple Neuron\nimport numpy as np\n\ndef neuron(x, w, b):\n    return np.dot(x, w) + b`);
  const [terminal, setTerminal] = useState("System: Ready for AI analysis.");
  const [loading, setLoading] = useState(false);

  const handleAiReview = async () => {
    setLoading(true);
    const result = await evaluateTask('sandbox', { code, occupation: userData.occupation });
    setTerminal(`> GEMINI REVIEW:\n${result.feedback}\n\n> CONSOLE OUTPUT:\n${result.output}`);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] p-10 text-white font-sans">
      <div className="max-w-6xl mx-auto backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col h-[80vh]">
        <div className="p-4 bg-white/5 flex justify-between border-b border-white/10">
          <span className="text-[10px] font-black tracking-widest text-purple-400">AI CODE EVALUATOR</span>
          <button onClick={onBack} className="text-xs opacity-50">EXIT</button>
        </div>
        <div className="flex-1 grid grid-cols-2">
          <textarea value={code} onChange={(e) => setCode(e.target.value)} className="p-8 bg-black/40 font-mono text-sm outline-none resize-none border-r border-white/5" />
          <div className="p-8 bg-black/60 font-mono text-[11px] text-green-400 whitespace-pre-wrap overflow-y-auto">
            {loading ? "GEMINI ANALYZING LOGIC..." : terminal}
          </div>
        </div>
        <div className="p-6 bg-white/5 flex gap-4">
          <button onClick={handleAiReview} className="flex-1 py-4 bg-white/10 border border-white/10 rounded-2xl font-bold text-xs uppercase hover:bg-white/20">Analyze Logic</button>
          <button onClick={() => onFinish(20)} className="flex-[2] py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl font-black text-xs uppercase tracking-widest">Update Growth Matrix</button>
        </div>
      </div>
    </div>
  );
};

export default CodingSandbox;