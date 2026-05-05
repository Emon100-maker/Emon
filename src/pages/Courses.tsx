import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, BookOpen, GraduationCap, ChevronRight, Users, Star, Clock } from 'lucide-react';
import { Course } from '../types';

const SAMPLE_COURSES: Course[] = [
  {
    id: '1',
    title: 'HSC Chemistry - Full Course',
    description: 'Complete HSC Chemistry preparation with focus on organic, inorganic and physical chemistry.',
    category: 'HSC',
    subject: 'Chemistry',
    fee: 2500,
    duration: '6 Months',
    thumbnail: 'https://images.unsplash.com/photo-1603126734139-5d2fd0416990?q=80&w=800',
    syllabus: ['Organic Reactions', 'Mechanisms', 'Nomenclature', 'Laboratory Tests']
  },
  {
    id: '2',
    title: 'HSC Higher Math - Full Course',
    description: 'Deep dive into 1st & 2nd paper Higher Math with shortcut techniques and board question solving.',
    category: 'HSC',
    subject: 'Higher Math',
    fee: 3000,
    duration: '6 Months',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800',
    syllabus: ['Calculus', 'Complex Numbers', 'Polynomials', 'Statics']
  },
  {
    id: '3',
    title: 'HSC Biology - Full Course',
    description: 'Complete Botany and Zoology course with 3D diagrams and mnemonic techniques.',
    category: 'HSC',
    subject: 'Biology',
    fee: 2500,
    duration: '6 Months',
    thumbnail: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=800',
    syllabus: ['Human Physiology', 'Genetics', 'Plant Physiology']
  },
  {
    id: '4',
    title: 'HSC English - Full Course',
    description: 'Grammar mastery, composition and literature analysis for HSC English 1st & 2nd paper.',
    category: 'HSC',
    subject: 'English',
    fee: 2500,
    duration: '4 Months',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800',
    syllabus: ['Advanced Grammar', 'Composition', 'Literature']
  },
  {
    id: '5',
    title: 'HSC ICT - Full Course',
    description: 'Master HTML, C Programming, Logic Gates, and Number Systems.',
    category: 'HSC',
    subject: 'ICT',
    fee: 2000,
    duration: '4 Months',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
    syllabus: ['Number Systems', 'HTML', 'C Programming', 'Logic Gates']
  },
  {
    id: '6',
    title: 'Engineering Admission Care',
    description: 'Ultimate target course for BUET, RUET, CUET and KUET preparation.',
    category: 'Admission',
    subject: 'Higher Math',
    fee: 12000,
    duration: '5 Months',
    thumbnail: 'https://images.unsplash.com/photo-1564910443496-5fd2d7039c0f?q=80&w=800',
    syllabus: ['Advanced Physics', 'Advanced Math', 'Question Bank Analysis']
  }
];

const SUBJECTS = ['All', 'Chemistry', 'Higher Math', 'Biology', 'English', 'ICT'];

const Courses = () => {
  const [filter, setFilter] = useState<'All' | 'HSC' | 'Admission'>('All');
  const [activeSubject, setActiveSubject] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCourses = SAMPLE_COURSES.filter(c => {
    const matchesFilter = filter === 'All' || c.category === filter;
    const matchesSubject = activeSubject === 'All' || c.subject === activeSubject;
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                         c.subject.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSubject && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Our Courses</h1>
              <p className="text-slate-600 max-w-xl">Choose from our selection of highly structured academic and admission courses designed to boost your performance.</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Level:</span>
              <div className="flex bg-white p-1 rounded-2xl border border-slate-200">
                  {['All', 'HSC', 'Admission'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f as any)}
                      className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                        filter === f ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Subject:</span>
              <div className="flex flex-wrap gap-2">
                  {SUBJECTS.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubject(sub)}
                      className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
                        activeSubject === sub 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-100' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredCourses.map((course, idx) => (
             <motion.div
               key={course.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all flex flex-col h-full"
             >
                <div className="aspect-[16/10] bg-slate-100 relative group-hover:scale-105 transition-transform duration-500">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                      course.category === 'HSC' ? 'bg-blue-600 text-white' : 'bg-orange-600 text-white'
                    }`}>
                      {course.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow space-y-6">
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" />
                        {course.subject}
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {course.title}
                     </h3>
                     <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                        {course.description}
                     </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <Users className="w-4 h-4 text-slate-400" />
                        1.2K+ Students
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        4.9 (240 reviews)
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <Clock className="w-4 h-4 text-slate-400" />
                        {course.duration}
                     </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                     <div className="text-2xl font-black text-slate-900">
                        ৳ {course.fee.toLocaleString()}
                     </div>
                     <button className="flex items-center gap-2 text-blue-600 font-bold group/btn">
                        Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>

        {filteredCourses.length === 0 && (
           <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                 <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No courses found</h3>
              <p className="text-slate-500">Try adjusting your filters or search keywords.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
