import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Volume2, VolumeX, Play, RotateCcw, Loader2 } from 'lucide-react';
import { generateMotivationalSpeech, generateSpeechAudio } from '../services/motivationService';
import { useAuth } from '../contexts/AuthContext';

interface MotivationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MotivationModal: React.FC<MotivationModalProps> = ({ isOpen, onClose }) => {
  const { profile } = useAuth();
  const [speech, setSpeech] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const getNewMotivation = async () => {
    setLoading(true);
    setSpeech(null);
    setAudioUrl(null);
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }

    const name = profile?.displayName || 'Student';
    const goal = profile?.role === 'admin' ? 'leading the next generation' : 'preparing for HSC and Admission excellence';
    
    const text = await generateMotivationalSpeech(name, goal);
    setSpeech(text);
    
    const url = await generateSpeechAudio(text || '');
    setAudioUrl(url);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen && !speech) {
      getNewMotivation();
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (!audioUrl) return;

    if (!audio) {
      const newAudio = new Audio(audioUrl);
      newAudio.onended = () => setIsPlaying(false);
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Sparkles className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h2 className="text-2xl font-black italic tracking-tight">AI Motivation</h2>
                  <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Power for your focus</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 space-y-8">
              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-6">
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                  <p className="text-slate-500 font-bold animate-pulse">Gemini is crafting your speech...</p>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    <p className="text-xl font-medium text-slate-800 leading-relaxed italic border-l-4 border-blue-100 pl-6">
                      "{speech}"
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={togglePlay}
                      disabled={!audioUrl}
                      className="flex-grow flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-slate-100 hover:shadow-blue-100"
                    >
                      {isPlaying ? (
                        <>
                          <VolumeX className="w-5 h-5" />
                          Stop Speech
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          Listen to Speech
                        </>
                      )}
                    </button>
                    <button
                      onClick={getNewMotivation}
                      className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-slate-200"
                      title="Regenerate"
                    >
                      <RotateCcw className="w-6 h-6" />
                    </button>
                  </div>
                </>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-10 py-6 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Powered by Gemini AI for HSC Excellence</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
