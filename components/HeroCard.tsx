import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Hammer } from 'lucide-react';

export const HeroCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Glass Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-ms-border bg-ms-glass backdrop-blur-xl shadow-2xl">
        
        {/* Subtle Top Shine */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
        
        <div className="px-8 py-12 md:px-12 md:py-16 text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-ms-blue/10 border border-ms-blue/20 text-ms-blue text-xs font-medium tracking-wide uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ms-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ms-blue"></span>
            </span>
            Under Construction
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Stay Tuned
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
          >
            <span className="text-slate-200 font-medium">microsoftadmin.in</span> is becoming your definitive hub for deep-dive content on <span className="text-white/90">Entra ID</span>, <span className="text-white/90">Exchange Online</span>, <span className="text-white/90">Teams</span>, <span className="text-white/90">Intune</span>, and <span className="text-white/90">Security</span>. 
            <br className="hidden md:block" />
            <span className="block mt-2 text-sm md:text-base text-slate-500">
              Prepare for troubleshooting playbooks, PowerShell scripts, runbooks, and real-world admin insights.
            </span>
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA (Disabled/Static) */}
            <button 
              disabled
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all duration-200 bg-white/10 border border-white/10 rounded-lg cursor-not-allowed opacity-70"
            >
              <Hammer className="w-4 h-4 mr-2 text-slate-400" />
              <span>Launching Soon</span>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10"></div>
            </button>

            {/* Secondary CTA (Link) */}
            <a 
              href="https://sayanghosh.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all duration-200 bg-ms-blue hover:bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(0,120,212,0.3)] hover:shadow-[0_0_30px_rgba(0,120,212,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Portfolio
                <ExternalLink className="w-4 h-4 ml-2 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </a>
          </motion.div>
        </div>
        
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-ms-blue/5 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};