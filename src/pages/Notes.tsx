import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Search, Filter, Book, FileDown, Layers, ChevronRight } from 'lucide-react';
import { LearningMaterial } from '../types';

const SAMPLE_NOTES: LearningMaterial[] = [
  {
    id: 'n1',
    title: 'Organic Chemistry Roadmap',
    subject: 'Chemistry',
    chapter: 'Organic Chemistry',
    topic: 'Reaction Mechanisms',
    pdfUrl: '#',
    type: 'Note'
  },
  {
    id: 'n2',
    title: 'Differential Calculus Shortcuts',
    subject: 'Higher Math',
    chapter: 'Calculus',
    topic: 'Shortcut Techniques',
    pdfUrl: '#',
    type: 'Tricks'
  },
  {
    id: 'n3',
    title: 'Plant Physiology Diagram Sheet',
    subject: 'Biology',
    chapter: 'Botany',
    topic: 'Photosynthesis Cycle',
    pdfUrl: '#',
    type: 'Sheet'
  },
  {
    id: 'n4',
    title: 'English Preposition Master Sheet',
    subject: 'English',
    chapter: 'Grammar',
    topic: 'Appropriate Prepositions',
    pdfUrl: '#',
    type: 'Sheet'
  },
  {
    id: 'n5',
    title: 'C Programming Syntax Note',
    subject: 'ICT',
    chapter: 'Programming',
    topic: 'Basic Syntax & Loops',
    pdfUrl: '#',
    type: 'Note'
  }
];

const SUBJECTS = ['All', 'Chemistry', 'Higher Math', 'Biology', 'English', 'ICT'];

const Notes = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Note' | 'Sheet' | 'Tricks'>('All');
  const [activeSubject, setActiveSubject] = useState('All');
  const [search, setSearch] = useState('');

  const filteredNotes = SAMPLE_NOTES.filter(n => {
    const matchesTab = activeTab === 'All' || n.type === activeTab;
    const matchesSubject = activeSubject === 'All' || n.subject === activeSubject;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || 
                         n.subject.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSubject && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Class Notes & Sheets</h1>
          <p className="text-slate-600 text-lg">High-quality materials curated by expert teachers. Organized by subject and chapter for easy access.</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex p-1 bg-slate-100 rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
              {['All', 'Note', 'Sheet', 'Tricks'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab === 'All' && <Layers className="w-4 h-4" />}
                  {tab === 'Note' && <Book className="w-4 h-4" />}
                  {tab === 'Sheet' && <FileDown className="w-4 h-4" />}
                  {tab === 'Tricks' && <FileText className="w-4 h-4" />}
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search materials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 px-4">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">Subject:</span>
            {SUBJECTS.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  activeSubject === sub 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/30 transition-all flex flex-col h-full relative"
            >
              <div className="absolute top-6 right-6">
                 <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                   note.type === 'Note' ? 'bg-blue-100 text-blue-700' : 
                   note.type === 'Sheet' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                 }`}>
                   {note.type}
                 </span>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white text-slate-400">
                  <FileText className="w-7 h-7" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">{note.subject} • {note.chapter}</p>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{note.topic}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50 mt-8 flex items-center justify-between">
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Preview <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all active:scale-95">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
