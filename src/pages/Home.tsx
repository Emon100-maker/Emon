import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Trophy, ChevronRight, GraduationCap, Video, FileText, CheckCircle, HelpCircle, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Logo } from '../components/Logo';

const Home = () => {
  const { login, user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform origin-right translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <Logo className="w-20 h-20 mb-4" />
              </motion.div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
                <GraduationCap className="w-4 h-4" />
                Trusted by 5000+ Students
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Your Complete <span className="text-blue-600">HSC & Admission</span> Learning Platform
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Master your HSC exams and secure your dream seat in Engineering, Medical, or Varsity with our structured courses and expert guidance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {!user ? (
                  <button
                    onClick={login}
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group hover:scale-105"
                  >
                    Get Started Free
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link
                    to="/courses"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group hover:scale-105"
                  >
                    Browse Courses
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                <Link
                  to="/notes"
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-100 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2 group"
                >
                  View Sample Notes
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                 <div className="space-y-4 pt-12">
                   <div className="bg-slate-900 aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                      <img src="https://images.unsplash.com/photo-1523240715636-82ebc1647e30?q=80&w=800" alt="Students" className="w-full h-full object-cover opacity-80" />
                   </div>
                   <div className="bg-blue-600 aspect-square rounded-3xl p-8 flex flex-col justify-end text-white shadow-2xl -rotate-3">
                      <p className="text-4xl font-bold">98%</p>
                      <p className="text-sm opacity-80 font-medium">Success Rate</p>
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="bg-white aspect-[3/4] rounded-3xl p-8 shadow-2xl flex flex-col justify-center border border-slate-100">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                        <Trophy className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-slate-900">Expert Mentors</p>
                      <p className="text-slate-500 mt-2">Learn from BUET, Medical & Varsity seniors.</p>
                   </div>
                   <div className="bg-slate-100 aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-2">
                      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800" alt="Learning" className="w-full h-full object-cover" />
                   </div>
                 </div>
              </div>
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 blur-[100px] -z-10 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Enrolled Students', value: '5K+', color: 'text-blue-600' },
            { label: 'Course Hours', value: '1.2K+', color: 'text-blue-600' },
            { label: 'PDF Notes', value: '800+', color: 'text-blue-600' },
            { label: 'Success Results', value: '450+', color: 'text-blue-600' },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">Why Choose Us</p>
          <h2 className="text-4xl font-bold text-slate-900">Features Built for Your Success</h2>
          <p className="text-slate-600">Everything you need to excel in your academic journey and secure your future admission.</p>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'HSC Academic Prep',
              desc: 'Deep dive into Physics, Chemistry, Math, and Biology with chapter-wise structured syllabus.',
              icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
              bg: 'bg-blue-50',
            },
            {
              title: 'Admission Care',
              desc: 'Specialized preparation for BUET, Medical, and Varsity admission exams with question bank analysis.',
              icon: <Trophy className="w-6 h-6 text-orange-600" />,
              bg: 'bg-orange-50',
            },
            {
              title: 'Lecture Notes & Sheets',
              desc: 'Download high-quality PDF notes, practice sheets, and short tricks created by expert mentors.',
              icon: <FileText className="w-6 h-6 text-purple-600" />,
              bg: 'bg-purple-50',
            },
            {
              title: 'Active Q&A Forum',
              desc: 'Stuck on a problem? Post it in our question section and get detailed answers from teachers.',
              icon: <HelpCircle className="w-6 h-6 text-emerald-600" />,
              bg: 'bg-emerald-50',
            },
            {
              title: 'Video Learning',
              desc: 'Access pre-recorded high-quality video lectures for every topic, anytime you want.',
              icon: <Video className="w-6 h-6 text-red-600" />,
              bg: 'bg-red-50',
            },
            {
              title: 'Exam System',
              desc: 'Take timed mock tests, MCQs, and model tests with instant result and leaderboard tracking.',
              icon: <ClipboardList className="w-6 h-6 text-indigo-600" />,
              bg: 'bg-indigo-50',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Course Preview */}
      <section className="bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">Course Catalog</p>
              <h2 className="text-4xl font-bold text-white">Popular Career Paths</h2>
            </div>
            <Link to="/courses" className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors">
              View All Courses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'HSC Higher Math - Full Course',
                category: 'HSC',
                price: '৳ 3,000',
                enrolled: '1.5K+',
                rating: '5.0',
              },
              {
                title: 'HSC Chemistry - Full Course',
                category: 'HSC',
                price: '৳ 2,500',
                enrolled: '1.2K+',
                rating: '4.9',
              },
              {
                title: 'Engineering Admission Care',
                category: 'Admission',
                price: '৳ 12,000',
                enrolled: '800+',
                rating: '4.9',
              },
            ].map((course, i) => (
              <div key={i} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-6 text-white text-left">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{course.title}</h3>
                  <div className="flex items-center gap-6 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Users className="w-4 h-4 text-blue-400" />
                      {course.enrolled} Students
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {course.rating} Rating
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-700 flex justify-between items-center">
                    <p className="text-2xl font-bold text-white">{course.price}</p>
                    <button className="px-6 py-2 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-blue-400 hover:text-white transition-all">
                      Enroll Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-20 text-center space-y-10 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Start Your Learning Journey Today!</h2>
            <p className="text-blue-100 text-lg md:text-xl">Join thousands of students who are already achieving their goals with Tanveers Care.</p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              {!user ? (
                <button
                  onClick={login}
                  className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  Join Now <ChevronRight className="w-6 h-6" />
                </button>
              ) : (
                <Link
                  to="/dashboard"
                  className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  Go to Dashboard <ChevronRight className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
