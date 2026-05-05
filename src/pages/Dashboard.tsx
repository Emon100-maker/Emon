import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, BookOpen, Clock, Trophy, ChevronRight, PlayCircle, FileText, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotivationModal } from '../components/MotivationModal';

const Dashboard = () => {
  const { profile, user } = useAuth();
  const [isMotivationOpen, setIsMotivationOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, {profile?.displayName}!</h1>
            <p className="text-slate-500 font-medium">Keep growing, your admission goal is getting closer.</p>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={() => setIsMotivationOpen(true)}
               className="px-6 py-3 bg-white border-2 border-blue-100 text-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all flex items-center gap-2"
             >
                <Sparkles className="w-4 h-4" />
                AI Motivation
             </button>
             <Link to="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2">
                Explore More Courses
                <ChevronRight className="w-4 h-4" />
             </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <StatCard icon={<BookOpen className="text-blue-600" />} label="Enrolled Courses" value="3" sub="Active now" />
           <StatCard icon={<Clock className="text-orange-600" />} label="Learning Hours" value="48h" sub="Last 30 days" />
           <StatCard icon={<Trophy className="text-amber-600" />} label="Exams Taken" value="12" sub="85% Avg score" />
           <StatCard icon={<FileText className="text-purple-600" />} label="Notes Saved" value="42" sub="Recent downloads" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Enrolled Courses */}
           <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center px-2">
                 <h2 className="text-2xl font-black text-slate-900">Continue Learning</h2>
                 <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                 {[
                   { title: 'Engineering Physics Special', progress: 65, lastLesson: 'Newtonian Mechanics - Part 4', image: 'https://images.unsplash.com/photo-1636466483764-45a9c7aa30f5?q=80&w=400' },
                   { title: 'HSC Chemistry Batch 2026', progress: 32, lastLesson: 'Covalent Bonding Basics', image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa539?q=80&w=400' },
                 ].map((course, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-center"
                   >
                      <div className="w-full md:w-32 aspect-video md:aspect-square bg-slate-100 rounded-2xl overflow-hidden shrink-0">
                         <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow space-y-4 w-full">
                         <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                            <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                            <p className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{course.progress}% Complete</p>
                         </div>
                         <p className="text-sm text-slate-500 flex items-center gap-2">
                            <PlayCircle className="w-4 h-4 text-blue-500" />
                            Next: {course.lastLesson}
                         </p>
                         <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-blue-600 rounded-full shadow-lg shadow-blue-200"
                            />
                         </div>
                      </div>
                      <button className="p-4 bg-slate-900 text-white rounded-2xl shrink-0 hover:bg-blue-600 transition-colors">
                         <PlayCircle className="w-6 h-6" />
                      </button>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* Sidebar Info */}
           <div className="space-y-10">
              {/* Daily Motivation Card */}
              <div className="bg-slate-900 p-8 rounded-[2.5rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                 <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                       <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-white italic">Feeling Low?</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">Let our AI generate a custom high-energy motivational speech just for you.</p>
                    </div>
                    <button 
                      onClick={() => setIsMotivationOpen(true)}
                      className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2"
                    >
                       Get Inspired <Sparkles className="w-4 h-4 text-blue-600 group-hover:text-white" />
                    </button>
                 </div>
              </div>

              {/* Upcoming Exams */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                 <h2 className="text-xl font-black text-slate-900">Upcoming Tests</h2>
                 <div className="space-y-6">
                    {[
                      { title: 'Mock Test: Vector', date: 'Tomorrow, 10:00 AM', type: 'MCQ' },
                      { title: 'Chemistry Ch-3 Quiz', date: '7 May, 04:00 PM', type: 'Quiz' },
                    ].map((exam, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                            <Clock className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                         </div>
                         <div className="space-y-1">
                            <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exam.title}</p>
                            <p className="text-xs text-slate-400 font-medium">{exam.date} • <span className="text-blue-500 uppercase">{exam.type}</span></p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <Link to="/exam" className="block text-center w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold hover:bg-blue-50 hover:text-blue-600 transition-all border border-dashed border-slate-200">
                   Schedule New Test
                 </Link>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-blue-200">
                 <div className="inline-flex p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <Trophy className="w-6 h-6 text-amber-300" />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black italic">Admission Pro</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">You've completed 5 admission model tests this week. Keep up the momentum!</p>
                 </div>
                 <div className="flex items-center gap-3 pt-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-black uppercase tracking-widest text-blue-100">Badge Earned</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
      <MotivationModal isOpen={isMotivationOpen} onClose={() => setIsMotivationOpen(false)} />
    </div>
  );
};

const StatCard = ({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 hover:shadow-xl hover:shadow-blue-50 transition-all">
    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-xl font-bold">
      {icon}
    </div>
    <div>
      <p className="text-3xl font-black text-slate-900">{value}</p>
      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">{label}</p>
    </div>
    <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
      {sub}
    </div>
  </div>
);

export default Dashboard;
