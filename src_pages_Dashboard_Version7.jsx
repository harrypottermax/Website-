import React from "react";
import FocusTimer from "../components/FocusTimer";
import AIChat from "../components/AIChat";
import Quiz from "../components/Quiz";
import Leaderboard from "../components/Leaderboard";
import Dictionary from "../components/Dictionary";
import ImageDoubtSolver from "../components/ImageDoubtSolver";
import MoodPlanner from "../components/MoodPlanner";
import StudyMusic from "../components/StudyMusic";
import QuestionPaperHub from "../components/QuestionPaperHub";
import PastPaperAnalyzer from "../components/PastPaperAnalyzer";
import VoiceToNotes from "../components/VoiceToNotes";
import ConceptFlowchart from "../components/ConceptFlowchart";
import AIStudyRooms from "../components/AIStudyRooms";
import QuizBattleMode from "../components/QuizBattleMode";
import TeacherDashboard from "../components/TeacherDashboard";
import EduCoinBank from "../components/EduCoinBank";

export default function Dashboard() {
  return (
    <div className="px-4 md:px-16 py-12">
      <h2 className="text-3xl font-extrabold text-blue mb-4">Dashboard</h2>
      <p className="mb-4 text-gray-700">
        Welcome back! Here you can access all your study tools, progress, and rewards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FocusTimer />
        <AIChat />
        <Quiz />
        <Leaderboard />
        <Dictionary />
        <ImageDoubtSolver />
        <MoodPlanner />
        <StudyMusic />
        <QuestionPaperHub />
        <PastPaperAnalyzer />
        <VoiceToNotes />
        <ConceptFlowchart />
        <AIStudyRooms />
        <QuizBattleMode />
        <TeacherDashboard />
        <EduCoinBank />
      </div>
    </div>
  );
}