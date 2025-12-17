import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import AdvancedTrack3Form from './AdvancedTrack3Form';
import GuidanceDashboard from './GuidanceDashboard';
import { analyzeCareerPath } from './geminiService';
// ... other imports

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [skillScores, setSkillScores] = useState([0, 0, 0, 0, 0]);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  // Real-time dynamic scores: [Math, Algos, Coding, System, Interview]
useEffect(() => {
    if (userData) {
      const getAIUpdate = async () => {
        setLoading(true);
        const analysis = await analyzeCareerPath(userData, skillScores);
        setAiAnalysis(analysis);
        setLoading(false);
      };
      getAIUpdate();
    }
  }, [userData, skillScores]);

  const handleFormSubmit = (data) => {
    setUserData(data);
    // Initialize scores based on form proficiency input
    const initialMath = data.proficiency * 10;
    setSkillScores([initialMath, 30, 20, 15, 10]); 
    setIsSubmitted(true);
  };

  const updateGlobalSkills = (index, points) => {
    setSkillScores(prev => {
      const newScores = [...prev];
      newScores[index] = Math.min(100, newScores[index] + points);
      return newScores;
    });
  };

  return (
    
    <div className="App">
       <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', // Use viewport width
        height: '100vh', // Use viewport height
        zIndex: 0,
        pointerEvents: 'auto'
      }}><Spline scene="https://prod.spline.design/OciwsuWaousnwVDe/scene.splinecode"
      style={{ width: '100%', height: '100%' }}/>
        
      </div>

      {loading && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center text-cyan-400">Gemini is analyzing your growth...</div>}
      
      {!userData ? (
<AdvancedTrack3Form onSubmit={handleFormSubmit} />
      ) : (
        <GuidanceDashboard 
          userData={userData} 
          skillScores={skillScores}
          aiAnalysis={aiAnalysis} // Pass Gemini's brain to the dashboard
          onUpdateSkill={(idx, pts) => {
            const newScores = [...skillScores];
            newScores[idx] = Math.min(100, newScores[idx] + pts);
            setSkillScores(newScores);
          }}
        />
      )}
    </div>
  );
}

export default App;