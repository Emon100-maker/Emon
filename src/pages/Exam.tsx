import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Clock, Trophy, Play, CheckCircle, AlertCircle, Search, Filter } from 'lucide-react';

const Exam = () => {
  const [activeType, setActiveType] = useState<'All' | 'MCQ' | 'Model Test'>('All');
  const [activeDifficulty, setActiveDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');

  const EXAMS = [
    {
      id: 'e1',
      title: 'Physics Chapter 1-5 MCQ Marathon',
      type: 'MCQ',
      questions: 50,
      duration: '45 Min',
      difficulty: 'Medium',
      subject: 'Physics'
    },
    {
      id: 'e2',
      title: 'BUET Standard Model Test 01',
      type: 'Model Test',
      questions: 60,
      duration: '120 Min',
      difficulty: 'Hard',
      subject: 'Combined'
    },
    {
      id: 'e3',
      title: 'Medical Biology Daily Quiz',
      type: 'MCQ',
      questions: 30,
      duration: '15 Min',
      difficulty: 'Easy',
      subject: 'Biology'
    }
  ];

  const filteredExams = EXAMS.filter(e => {
    const typeMatch = activeType === 'All' || e.type === activeType;
    const difficultyMatch = activeDifficulty === 'All' || e.difficulty === activeDifficulty;
    return typeMatch && difficultyMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden relative">
           <div className="space-y-6 relative z-10">
              <div className="inline-flex px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
                 Practice Arena
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Test Your Knowledge <br/>
                <span className="text-blue-600">& Earn Your Rank</span>
              </h1>
              <p className="text-slate-600 max-w-lg text-lg">Timed exams with instant results to help you track your progress and identify weak spots.</p>
           </div>
           
           <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center space-y-2">
                 <Trophy className="w-8 h-8 text-amber-500 mx-auto" />
                 <p className="text-2xl font-black text-slate-900">450+</p>
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Scorers</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center space-y-2">
                 <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                 <p className="text-2xl font-black text-slate-900">12K+</p>
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tests Taken</p>
              </div>
           </div>

           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 w-fit">
             {['All', 'MCQ', 'Model Test'].map((type) => (
               <button
                 key={type}
                 onClick={() => setActiveType(type as any)}
                 className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                   activeType === type ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50'
                 }`}
               >
                 {type}
               </button>
             ))}
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 w-fit">
             {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
               <button
                 key={diff}
                 onClick={() => setActiveDifficulty(diff as any)}
                 className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                   activeDifficulty === diff ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50'
                 }`}
               >
                 {diff}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredExams.map((exam, idx) => (
             <motion.div
               key={exam.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all flex flex-col h-full overflow-hidden relative"
             >
                <div className="space-y-6">
                   <div className="flex justify-between items-start">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ClipboardList className="w-7 h-7" />
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        exam.difficulty === 'Hard' ? 'bg-red-50 text-red-600' : 
                        exam.difficulty === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                         {exam.difficulty}
                      </span>
                   </div>

                   <div className="space-y-2">
                      <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">{exam.subject}</p>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                         {exam.title}
                      </h3>
                   </div>

                   <div className="grid grid-cols-2 gap-6 pt-4">
                      <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                         <div className="p-2 bg-slate-50 rounded-lg">
                           <Clock className="w-4 h-4 text-slate-400" />
                         </div>
                         {exam.duration}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                         <div className="p-2 bg-slate-50 rounded-lg">
                           <HelpCircleIcon className="w-4 h-4 text-slate-400" />
                         </div>
                         {exam.questions} Questions
                      </div>
                   </div>
                </div>

                <div className="pt-10 mt-auto">
                   <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all group/btn active:scale-95 shadow-xl shadow-slate-100 hover:shadow-blue-100">
                      <Play className="w-5 h-5 fill-current" />
                      Start Exam Now
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

const HelpCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);

export default Exam;
