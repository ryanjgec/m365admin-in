import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Mail, 
  Users, 
  Smartphone, 
  Terminal, 
  Cloud 
} from 'lucide-react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#050a14] to-black" />

      {/* Large Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-ms-blue/10 blur-[120px] opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-900/10 blur-[100px] opacity-30" />
      
      {/* Grid Pattern Overlay (Subtle Tech Feel) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Abstract Icons */}
      {/* Each icon uses motion.div for smooth independent floating */}
      
      {/* Top Right - Teams/Users */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.15, y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-[15%] right-[15%] text-white"
      >
        <Users size={64} strokeWidth={1} />
      </motion.div>

      {/* Top Left - Exchange/Mail */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] left-[10%] text-ms-blue"
      >
        <Mail size={80} strokeWidth={1} />
      </motion.div>

      {/* Bottom Left - Security */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.12, y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[15%] text-cyan-500"
      >
        <ShieldCheck size={72} strokeWidth={1} />
      </motion.div>

      {/* Bottom Right - Intune/Device */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.08, y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[25%] right-[20%] text-white"
      >
        <Smartphone size={56} strokeWidth={1} />
      </motion.div>

      {/* Center Top - Cloud/Entra */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.05, y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[50%] -translate-x-1/2 text-white"
      >
        <Cloud size={120} strokeWidth={0.5} />
      </motion.div>

      {/* Scattered Playbook/Script Icons */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[40%] left-[5%] text-slate-400 opacity-5"
      >
        <Terminal size={40} strokeWidth={1} />
      </motion.div>

    </div>
  );
};