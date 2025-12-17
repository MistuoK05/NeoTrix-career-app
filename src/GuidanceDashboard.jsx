import React, { useState } from 'react'; 
import MockInterview from './MockInterview';
import CodingSandbox from './CodingSandbox';
import ConceptDiagnostic from './ConceptDiagnostic';


// Added aiAnalysis to the destructuring of props
// In GuidanceDashboard.jsx
const GuidanceDashboard = ({ userData, aiAnalysis, skillScores, onUpdateSkill, onBack }) => {
  // ... inside your JSX where the graph is:
  <div className="h-40 flex items-end justify-between px-4 gap-6">
    {skillScores && skillScores.map((val, i) => (
      <div key={i} className="w-full bg-gradient-to-t from-cyan-600/40 to-cyan-400 rounded-2xl transition-all duration-1000 shadow-lg shadow-cyan-500/10" 
           style={{ height: `${val}%` }}>
      </div>
    ))}
  </div>

  const [activeTool, setActiveTool] = useState(null);

 // 2. Logic to swap screens based on active tool
if (activeTool === 'interview') {
  return <MockInterview 
    userData={userData} 
    onFinish={(score) => { onUpdateSkill(4, score); setActiveTool(null); }} // Added this
    onBack={() => setActiveTool(null)} 
  />;
}
if (activeTool === 'sandbox') {
  return <CodingSandbox 
    userData={userData} 
    onFinish={(score) => { onUpdateSkill(2, score); setActiveTool(null); }} // Added this
    onBack={() => setActiveTool(null)} 
  />;
}
if (activeTool === 'diagnostic') {
  return <ConceptDiagnostic 
    userData={userData} 
    onFinish={(score) => { onUpdateSkill(1, score); setActiveTool(null); }} // Added this
    onBack={() => setActiveTool(null)} 
  />;
}

  return (
    
    <div className="relative min-h-screen w-full flex flex-col items-center p-8 bg-[#020617] overflow-y-auto font-sans">
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl space-y-8 text-white">
        
        {/* Navigation Glass Navbar */}
        <div className="flex justify-between items-center backdrop-blur-xl bg-white/5 p-6 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-tight">
              Career Growth Matrix
            </h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
              Profile Analysis for: {userData.occupation}
            </p>
          </div>
          <button 
            onClick={onBack} 
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest"
          >
            ← Edit Profile
          </button>
        </div>

        {/* Top Row: User Summary & Growth Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="backdrop-blur-3xl bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center shadow-xl">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 mx-auto flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/20">🎓</div>
            <h2 className="text-xl font-bold mt-6">{userData.degree} Graduate</h2>
            <p className="text-cyan-400 text-[10px] font-black uppercase mt-2 tracking-widest">
              Future: {userData.mastersPlan}
            </p>
          </div>

          <div className="lg:col-span-2 backdrop-blur-3xl bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-xl">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-10">Real-Time Skill Growth Matrix</h3>
            <div className="h-40 flex items-end justify-between px-4 gap-6">
              {[userData.proficiency * 10, 65, 80, 40, 95].map((val, i) => (
                <div key={i} className="w-full relative group">
                  <div 
                    className="w-full bg-gradient-to-t from-cyan-600/40 to-cyan-400 rounded-2xl transition-all duration-1000 shadow-lg shadow-cyan-500/10 group-hover:brightness-125" 
                    style={{ height: `${val}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 text-[9px] text-gray-500 font-black uppercase tracking-widest">
              <span>Current</span><span>AI Algorithms</span><span>Development</span><span>Masters Prep</span><span>Interviews</span>
            </div>
          </div>
        </div>
      
        {/* Middle Section: Personalized Placement Preparation Platform */}
        <div className="backdrop-blur-3xl bg-white/5 border border-white/10 p-10 rounded-[3.5rem] shadow-2xl">
          <h3 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-4">
            Personalized Placement Preparation
          </h3>
          <h3>{aiAnalysis?.roadmap ? "Your Roadmap" : "Analyzing..."}</h3>
          <p className="text-xs text-gray-300 mb-8 leading-relaxed max-w-3xl">
            Based on your background in <span className="text-white font-bold">{userData.keySkills}</span>, we have calibrated a roadmap for mock interviews and coding tests targeting high-tier AI/ML placements.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button onClick={() => setActiveTool('interview')} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500 hover:bg-cyan-500/10 transition-all font-black text-[10px] tracking-widest uppercase">Launch Mock Interviews</button>
            <button onClick={() => setActiveTool('sandbox')} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500 hover:bg-purple-500/10 transition-all font-black text-[10px] tracking-widest uppercase">Launch Coding Sandbox</button>
            <button onClick={() => setActiveTool('diagnostic')} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500 hover:bg-green-500/10 transition-all font-black text-[10px] tracking-widest uppercase">Launch Concept Diagnostic</button>
          </div>
        </div>

        {/* Gemini Generated Roadmap Section */}
        <div className="backdrop-blur-3xl bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl">
          <h3 className="text-cyan-400 font-black uppercase tracking-widest mb-4 text-sm">Gemini-Generated Roadmap</h3>
          <ul className="space-y-4">
            {/* Added optional chaining and a fallback in case aiAnalysis is still loading */}
            {aiAnalysis?.roadmap ? (
              aiAnalysis.roadmap.map((step, i) => (
                <li key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                  <span className="text-cyan-500 font-bold">{i + 1}</span>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500 italic animate-pulse">Waiting for AI analysis results...</p>
            )}
          </ul>

          <div className="mt-8 p-8 bg-green-500/5 border border-green-500/20 rounded-[2rem] flex justify-between items-center">
            <div>
              <h4 className="text-green-400 font-bold uppercase text-xs">AI Career Match</h4>
              <p className="text-xl font-bold">{userData.occupation}</p>
            </div>
            <div className="text-5xl font-black text-green-400">{aiAnalysis?.careerMatch || 0}%</div>
          </div>
        </div>

        {/* Bottom Section: Academic Gaps & Career Trajectory */}
        <div className="backdrop-blur-3xl bg-red-500/[0.03] border border-red-500/20 p-10 rounded-[3rem] shadow-xl">
            <h3 className="text-sm font-black text-red-400 uppercase tracking-widest mb-6 text-sm">Academic Gaps & Resources</h3>
            <div className="space-y-4">
              {userData.roadblocks?.length > 0 ? (
                userData.roadblocks.map(item => (
                  <div key={item} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-4 hover:bg-white/10 transition-all">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-200">{item}</p>
                      <p className="text-[10px] text-gray-500 mt-1">Recommended: Targeted Practice on {item}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500 italic">No specific roadblocks identified.</p>
              )}
            </div>
          </div>
        {/* Dynamic Career Recommendation Box */}
<div className="backdrop-blur-3xl bg-green-500/[0.03] border border-green-500/20 p-10 rounded-[3rem] shadow-xl">
  <h3 className="text-sm font-black text-green-400 uppercase tracking-widest mb-6">
    AI Career Trajectory Suggestion
  </h3>
  
  {aiAnalysis ? (
    <>
      <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 mb-6">
        <div className="flex justify-between items-center">
          {/* Dynamically displays the occupation from form or Gemini's refined suggestion */}
          <span className="text-lg font-bold">
            {aiAnalysis.suggestedRole || userData.occupation}
          </span>
          <span className="text-green-400 font-black tracking-tighter">
            {aiAnalysis.careerMatch || 0}% MATCH
          </span>
        </div>
        <div className="mt-4 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] transition-all duration-1000" 
            style={{ width: `${aiAnalysis.careerMatch || 0}%` }}
          ></div>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 leading-relaxed italic">
        {/* Gemini's dynamic reasoning based on user skills and plan */}
        {aiAnalysis.careerReasoning || `Based on your proficiency and interest in ${userData.mastersPlan}, you are on a strong path toward this role.`}
      </p>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-8 h-8 border-4 border-green-500/20 border-t-green-500 rounded-full animate-spin mb-4"></div>
      <p className="text-xs text-gray-500 animate-pulse">Gemini is calculating your trajectory...</p>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default GuidanceDashboard;