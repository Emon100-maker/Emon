import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, LayoutDashboard, Users, FileText, BookOpen, Settings, Send, Image as ImageIcon, Trash2, Edit3, CheckCircle } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Courses' | 'Notes' | 'Questions'>('Overview');

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Control Panel</h1>
            <p className="text-slate-500 font-medium">Manage your learning platform, resources and student success.</p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all">
                <Settings className="w-4 h-4" />
                Settings
             </button>
             <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                <Plus className="w-4 h-4" />
                New Entry
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
           {/* Sidebar Navigation */}
           <div className="lg:w-64 space-y-2">
              {[
                { name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
                { name: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
                { name: 'Notes', icon: <FileText className="w-5 h-5" /> },
                { name: 'Questions', icon: <MessageCircleIcon className="w-5 h-5" /> },
              ].map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name as any)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                    activeTab === tab.name ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-slate-500 hover:bg-white hover:text-blue-600'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
           </div>

           {/* Main Content Area */}
           <div className="flex-grow space-y-10">
              {activeTab === 'Overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <AdminStat label="Total Students" value="12,450" color="bg-blue-600" icon={<Users className="text-white" />} change="+12% from last month" />
                   <AdminStat label="Active Courses" value="28" color="bg-emerald-600" icon={<BookOpen className="text-white" />} change="4 added recently" />
                   <AdminStat label="Pending Questions" value="124" color="bg-orange-600" icon={<HelpCircleIcon className="text-white" />} change="Needs teacher response" />

                   <div className="md:col-span-3 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                      <div className="flex justify-between items-center">
                         <h2 className="text-xl font-black text-slate-900">Recent User Questions</h2>
                         <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
                      </div>
                      <div className="space-y-4">
                         {[
                           { user: 'Rahat Islam', text: 'Problem in Integration by parts - Chap 9', time: '10 min ago', status: 'Pending' },
                           { user: 'Sumaiya Akter', text: 'Confusion about Lens maker formula sign convention', time: '1 hour ago', status: 'Pending' },
                         ].map((q, i) => (
                           <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-3xl gap-4 border border-slate-100">
                              <div className="flex gap-4 items-center">
                                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xs">
                                   {q.user[0]}
                                 </div>
                                 <div>
                                   <p className="font-bold text-slate-900">{q.user}</p>
                                   <p className="text-sm text-slate-500">{q.text}</p>
                                 </div>
                              </div>
                              <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                                 <span className="text-xs text-slate-400 font-medium">{q.time}</span>
                                 <button className="flex-grow md:flex-none px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors">Answer Now</button>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'Courses' && (
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10">
                   <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-black text-slate-900">Course Management</h2>
                      <div className="flex gap-2">
                         <div className="relative">
                            <input type="text" placeholder="Search courses..." className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-400 text-sm" />
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         </div>
                      </div>
                   </div>
                   
                   <div className="overflow-x-auto">
                      <table className="w-full text-left">
                         <thead>
                            <tr className="text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-50">
                               <th className="pb-6 px-4">Course Name</th>
                               <th className="pb-6 px-4">Category</th>
                               <th className="pb-6 px-4">Students</th>
                               <th className="pb-6 px-4">Status</th>
                               <th className="pb-6 px-4 text-right">Actions</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-50">
                            {[
                              { name: 'Physics Marathon', cat: 'HSC', students: '1.2K', status: 'Active' },
                              { name: 'Engineering Focus', cat: 'Adm', students: '850', status: 'Active' },
                            ].map((c, i) => (
                              <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                 <td className="py-6 px-4 font-bold text-slate-900">{c.name}</td>
                                 <td className="py-6 px-4 text-sm text-slate-500 font-medium">{c.cat}</td>
                                 <td className="py-6 px-4 text-sm text-slate-500 font-medium">{c.students}</td>
                                 <td className="py-6 px-4">
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                                      {c.status}
                                    </span>
                                 </td>
                                 <td className="py-6 px-4 text-right space-x-2">
                                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Edit3 className="w-4 h-4" /></button>
                                    <button className="p-2 text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                 </td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

const AdminStat = ({ label, value, color, icon, change }: any) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
     <div className="flex justify-between items-start">
        <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
           {icon}
        </div>
        <div className="text-emerald-500 text-xs font-bold flex items-center gap-1">
           <CheckCircle className="w-3 h-3" />
           {change}
        </div>
     </div>
     <div>
        <p className="text-3xl font-black text-slate-900">{value}</p>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</p>
     </div>
  </div>
);

const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);

const HelpCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export default Admin;
