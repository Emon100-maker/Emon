import React from 'react';
import { GraduationCap, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo variant="light" className="w-10 h-10" />
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Complete learning platform for HSC students and admission candidates. Excellence in academic and career success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-white uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">All Courses</Link></li>
              <li><Link to="/notes" className="hover:text-blue-400 transition-colors">Lecture Notes</Link></li>
              <li><Link to="/qa" className="hover:text-blue-400 transition-colors">Question Forum</Link></li>
              <li><Link to="/exam" className="hover:text-blue-400 transition-colors">Mock Exams</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="font-bold text-white uppercase tracking-wider text-sm">Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">HSC Chemistry</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">HSC Higher Math</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">HSC Biology</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">HSC English</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">HSC ICT</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-white uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>contact@tanveerscare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Mymensingh, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Tanveers Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
