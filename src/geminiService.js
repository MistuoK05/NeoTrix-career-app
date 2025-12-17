import { GoogleGenerativeAI } from "@google/generative-ai";

/** * VITE ENVIRONMENT CONFIGURATION
 * Ensure your .env file in the root folder contains: 
 * VITE_YOUR_GEMINI_API_KEY=your_actual_key_here
 */
const API_KEY = import.meta.env.VITE_YOUR_GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * CORE ANALYSIS: Generates the roadmap and career match data.
 * This function is called in App.jsx when the form is submitted.
 */
export const analyzeCareerPath = async (studentData, currentScores) => {
  // Using the stable pro model for real-time dashboard updates
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `
    As an AI Career Mentor for Track 3: AI/ML for Beginners, analyze this student profile:
    - Name: ${studentData.name}
    - Target Role: ${studentData.occupation}
    - Degree: ${studentData.degree}
    - Key Skills: ${studentData.keySkills}
    - Roadblocks: ${studentData.roadblocks?.join(", ") || "None"}
    - Performance Matrix (Math, Algos, Coding, System, Interview): ${JSON.stringify(currentScores)}

    Return ONLY a JSON object (no markdown formatting) with this structure:
    {
      "roadmap": ["Specific Step 1", "Specific Step 2", "Specific Step 3"],
      "dos": ["Strategy 1", "Strategy 2", "Strategy 3"],
      "donts": ["Mistake 1", "Mistake 2", "Mistake 3"],
      "suggestedRole": "Detailed AI/ML Job Title",
      "careerMatch": 85,
      "careerReasoning": "Two sentences explaining why they match this role based on their background."
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    // Cleans the response to ensure it can be parsed as JSON
    const text = response.text().replace(/```json|```/g, "").trim();
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Analysis Error:", error.message);
    return null; 
  }
};

/**
 * TASK EVALUATION: Grades the interactive tools.
 * Returns a score to update the 'Growth Matrix' graph.
 */
export const evaluateTask = async (taskType, data) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompts = {
    interview: `Grade this AI/ML MCQ Interview. Answers: ${JSON.stringify(data.results)}. Return JSON: {"score": 25, "feedback": "Critique"}`,
    sandbox: `Evaluate this Python code for a ${data.occupation}: ${data.code}. Return JSON: {"score": 30, "feedback": "Technical review", "output": "Terminal output"}`,
    diagnostic: `Assess these concept gaps: ${JSON.stringify(data.answers)}. Return JSON: {"score": 20, "feedback": "Concept analysis"}`
  };

  try {
    const result = await model.generateContent(prompts[taskType]);
    const response = await result.response;
    const text = response.text().replace(/```json|```/g, "").trim();
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Evaluation Error:", error);
    return { score: 5, feedback: "Evaluation failed. Please check your API key." };
  }
};