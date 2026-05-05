import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Book, Search, Download, ExternalLink, Library, Bookmark } from 'lucide-react';

const Books = () => {
  const [search, setSearch] = useState('');

  const BOOKS = [
    { title: 'Physics 1st Paper - Shahjahan Tapan', author: 'Dr. Shahjahan Tapan', cat: 'Textbook', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400' },
    { title: 'Chemistry 1st Paper - Hazari & Nag', author: 'Hazari and Nag', cat: 'Textbook', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400' },
    { title: 'Panjeree Engineering Question Bank', author: 'Panjeree', cat: 'Admission', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400' },
    { title: 'Udvash Mathematical formula sheet', author: 'Udvash', cat: 'Formula', img: 'https://images.unsplash.com/photo-1543003919-a995d51555c9?q=80&w=400' },
  ];

  const filteredBooks = BOOKS.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
           <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">E-Library & Books</h1>
              <p className="text-slate-600 max-w-xl text-lg font-medium">Access recommended textbooks and question banks curated for HSC and admission seekers.</p>
           </div>
           <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search by book name or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-[1.5rem] shadow-sm outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all font-medium"
              />
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {filteredBooks.map((book, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all group"
             >
                <div className="aspect-[3/4] overflow-hidden relative">
                   <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 right-4">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white transition-all">
                         <Bookmark className="w-4 h-4" />
                      </button>
                   </div>
                   <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {book.cat}
                      </span>
                   </div>
                </div>
                <div className="p-6 space-y-6">
                   <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{book.title}</h3>
                      <p className="text-sm text-slate-400 font-medium">{book.author}</p>
                   </div>
                   <div className="flex gap-2">
                      <button className="flex-grow flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all active:scale-95">
                         <Download className="w-4 h-4" />
                         Download
                      </button>
                      <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">
                         <ExternalLink className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
