import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-6 w-full text-center z-20">
      <p className="text-xs text-slate-600 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} microsoftadmin.in — Modern Workplace Knowledge Hub
      </p>
    </footer>
  );
};