import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ThumbsUp, Send, User, CheckCircle2, Clock, Image as ImageIcon, Search, Plus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Question } from '../types';

const MOCK_QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'How to find the resultant of three vectors starting from the same point in 3D space?',
    authorId: 'u1',
    authorName: 'Emon Rahman',
    createdAt: new Date(),
    resolved: true,
    upvotes: 12
  },
  {
    id: 'q2',
    text: 'What is the most efficient way to remember the activity series of metals for HSC Chemistry?',
    authorId: 'u2',
    authorName: 'Sara Ali',
    createdAt: new Date(Date.now() - 3600000),
    resolved: false,
    upvotes: 5
  }
];

const QA = () => {
  const { user, login } = useAuth();
  const [questions, setQuestions] = useState<Question[]>(MOCK_QUESTIONS);
  const [isAsking, setIsAsking] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');

  const handleAsk = () => {
    if (!user) {
      login();
      return;
    }
    if (!newQuestion.trim()) return;

    const question: Question = {
      id: Math.random().toString(36).substr(2, 9),
      text: newQuestion,
      authorId: user.uid,
      authorName: user.displayName || 'Anonymous',
      createdAt: new Date(),
      resolved: false,
      upvotes: 0
    };

    setQuestions([question, ...questions]);
    setNewQuestion('');
    setIsAsking(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Student Q&A Forum</h1>
            <p className="text-slate-600">Ask anything related to HSC academics or admission preparation.</p>
          </div>
          <button
            onClick={() => setIsAsking(!isAsking)}
            className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-100 hover:scale-105 active:scale-95"
          >
            {isAsking ? <Plus className="w-5 h-5 rotate-45 transition-transform" /> : <Plus className="w-5 h-5 transition-transform" />}
            Ask a Question
          </button>
        </div>

        <AnimatePresence>
          {isAsking && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-3xl border-2 border-blue-100 shadow-xl shadow-blue-50 space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-900">What's your question?</h3>
              <div className="space-y-4">
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Type your question here... be as descriptive as possible."
                  className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all resize-none font-medium"
                />
                <div className="flex justify-between items-center">
                   <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
                      <ImageIcon className="w-5 h-5" />
                      Attach Image
                   </button>
                   <div className="flex gap-4">
                      <button 
                        onClick={() => setIsAsking(false)}
                        className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleAsk}
                        className="px-10 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
                      >
                        Post Question
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          {questions.map((q) => (
            <motion.div
              key={q.id}
              layout
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{q.authorName}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <Clock className="w-3 h-3" />
                      {q.createdAt.toLocaleTimeString()} • {q.createdAt.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                {q.resolved && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-wider rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Resolved
                  </span>
                )}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                {q.text}
              </p>

              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                 <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 group transition-colors">
                       <ThumbsUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                       <span className="font-bold">{q.upvotes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 group transition-colors">
                       <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                       <span className="font-bold">Answers</span>
                    </button>
                 </div>
                 <button className="text-blue-600 font-bold hover:underline">View Discussion</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
