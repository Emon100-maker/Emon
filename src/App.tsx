import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Notes from './pages/Notes';
import QA from './pages/QA';
import Books from './pages/Books';
import Exam from './pages/Exam';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import { ProtectedRoute } from './components/ProtectedRoute';
import { MotivationModal } from './components/MotivationModal';
import { Sparkles } from 'lucide-react';

function AppContent() {
  const { loading, user } = useAuth();
  const [isMotivationOpen, setIsMotivationOpen] = React.useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/books" element={<Books />} />
            <Route path="/exam" element={<Exam />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Motivation Button */}
        {user && (
          <>
            <button
              onClick={() => setIsMotivationOpen(true)}
              className="fixed bottom-8 right-8 z-[90] p-4 bg-slate-900 text-white rounded-3xl shadow-2xl shadow-slate-900/40 hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all group"
              title="Get AI Motivation"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl">
                Need Motivation?
              </span>
            </button>
            <MotivationModal isOpen={isMotivationOpen} onClose={() => setIsMotivationOpen(false)} />
          </>
        )}
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
