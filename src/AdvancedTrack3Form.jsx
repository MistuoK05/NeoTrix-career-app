import React, { useState } from 'react';

const AdvancedTrack3Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: 'Backend Developer',
    degree: 'B.Tech IT',
    mastersPlan: 'Masters in AI/ML',
    keySkills: 'Java, Spring Boot, SQL, AWS Fundamentals',
    certificates: 'AWS Cloud Practitioner, Coding',
    proficiency: 5,
    roadblocks: []
  });

  const roadblocks = [
    "Complex Mathematics", "Lack of Project Ideas", "Environment/Algorithm setup", 
    "Understanding Algorithms", "Hardware/GPU Access", "Finding Mentorship/Community"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleRoadblock = (item) => {
    setFormData(prev => ({
      ...prev,
      roadblocks: prev.roadblocks.includes(item) 
        ? prev.roadblocks.filter(i => i !== item) 
        : [...prev.roadblocks, item]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 bg-[#020617] overflow-hidden">
      {/* Liquid 3D Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="relative z-10 w-full max-w-3xl backdrop-blur-[50px] bg-white/[0.02] border border-white/20 rounded-[3rem] shadow-2xl p-10 text-white">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">AI/ML Career Navigator</h1>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Personalized Guidance - Track 3</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Input Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] text-cyan-400 font-bold ml-2">CURRENT/TARGET OCCUPATION</label>
              <input name="occupation" value={formData.occupation} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-cyan-400 font-bold ml-2">CURRENT DEGREE</label>
              <input name="degree" value={formData.degree} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" />
            </div>
          </div>

          {/* New Input Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] text-cyan-400 font-bold ml-2">FUTURE MASTER'S PLAN</label>
              <input name="mastersPlan" value={formData.mastersPlan} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-cyan-400 font-bold ml-2">PYTHON & MATH PROFICIENCY (1-10)</label>
              <input type="range" min="1" max="10" name="proficiency" value={formData.proficiency} onChange={handleInputChange} className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
            </div>
          </div>

          {/* Textareas for Skills & Certs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] text-cyan-400 font-bold ml-2">KEY SKILLS</label>
              <textarea name="keySkills" value={formData.keySkills} onChange={handleInputChange} rows="2" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all resize-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-cyan-400 font-bold ml-2">CERTIFICATES & COMPETITIONS</label>
              <textarea name="certificates" value={formData.certificates} onChange={handleInputChange} rows="2" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all resize-none" />
            </div>
          </div>

          {/* Roadblocks Grid */}
          <div className="p-6 rounded-[2rem] bg-black/40 border border-white/10">
            <h3 className="text-xs font-bold mb-4 text-gray-300 text-center">IDENTIFY TRACK 3 ROADBLOCKS</h3>
            <div className="grid grid-cols-2 gap-3">
              {roadblocks.map(item => (
                <button type="button" key={item} onClick={() => toggleRoadblock(item)} className={`p-3 rounded-xl border text-[10px] transition-all ${formData.roadblocks.includes(item) ? 'bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-[2rem] font-black text-white text-xs tracking-[0.3em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all uppercase">
            Generate Personalized Guidance
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvancedTrack3Form;