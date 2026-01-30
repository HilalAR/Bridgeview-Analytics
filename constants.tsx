import React from 'react';

export const COLORS = {
  primary: '#0B222E',
  accent: '#C5A059', // Gold
  secondary: '#4FA7E1', // Brand Blue from image
  text: '#F8FAFC',
};

export const LOGO = (
  <svg width="40" height="28" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bridge Silhouette */}
    <path 
      d="M10 80C10 80 15 50 30 45C45 40 65 60 70 60C75 60 95 40 110 45C125 50 130 80 130 80H120V70C120 70 115 55 105 55C95 55 85 70 70 70C55 70 45 55 35 55C25 55 20 70 20 70V80H10Z" 
      fill="#4FA7E1"
    />
    <path 
      d="M40 55V48M70 60V53M100 55V48" 
      stroke="#4FA7E1" 
      strokeWidth="2"
    />
    <path 
      d="M30 45C50 38 90 38 110 45" 
      stroke="#4FA7E1" 
      strokeWidth="2" 
      fill="none"
    />
    
    {/* Jagged Gold Arrow */}
    <path 
      d="M15 85L45 75L65 85L85 65L105 75L125 40M125 40H115M125 40V50" 
      stroke="#C5A059" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const Icons = {
  Data: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zM4 11h16M4 15h16" />
    </svg>
  ),
  Strategy: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-bridgeview-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
};