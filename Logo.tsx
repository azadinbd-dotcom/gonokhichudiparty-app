
import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-16 h-12',
    md: 'w-48 h-36',
    lg: 'w-72 h-56',
  };

  return (
    <div className={`${sizes[size]} relative flex items-center justify-center overflow-visible animate-float`}>
      <svg
        viewBox="0 0 300 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* Bamboo Pole */}
        <path
          d="M45 220 L40 20 L48 20 L53 220 Z"
          fill="#5D4037"
          stroke="#3E2723"
          strokeWidth="1"
        />
        {/* Bamboo Nodes */}
        <line x1="42" y1="60" x2="50" y2="60" stroke="#3E2723" strokeWidth="2" />
        <line x1="43" y1="100" x2="51" y2="100" stroke="#3E2723" strokeWidth="2" />
        <line x1="44" y1="140" x2="52" y2="140" stroke="#3E2723" strokeWidth="2" />
        <line x1="45" y1="180" x2="53" y2="180" stroke="#3E2723" strokeWidth="2" />

        {/* Flag Body - Red with wavy effect */}
        <path
          d="M50 30 C 100 20, 150 50, 200 30 C 250 10, 280 40, 280 40 L 280 140 C 280 140, 250 110, 200 130 C 150 150, 100 120, 50 130 Z"
          fill="#D32F2F"
          stroke="#B71C1C"
          strokeWidth="1.5"
        />

        {/* Logo Elements inside Flag */}
        <g transform="translate(65, 55) scale(0.7)">
          {/* Boat Hull */}
          <path
            d="M20 80C20 80 120 120 220 80L200 105C200 105 120 125 40 105L20 80Z"
            fill="#000000"
          />

          {/* Paddy Sheafs */}
          <g id="paddy">
            <ellipse cx="70" cy="55" rx="25" ry="40" fill="#FBBF24" transform="rotate(-15 70 55)" />
            <ellipse cx="90" cy="45" rx="20" ry="45" fill="#F59E0B" transform="rotate(-5 90 45)" />
            <ellipse cx="110" cy="40" rx="22" ry="50" fill="#D97706" />
            <ellipse cx="135" cy="45" rx="20" ry="45" fill="#F59E0B" transform="rotate(5 135 45)" />
            <ellipse cx="155" cy="55" rx="25" ry="40" fill="#FBBF24" transform="rotate(15 155 55)" />
          </g>

          {/* Scale */}
          <g id="scale">
            <rect x="118" y="25" width="4" height="75" rx="2" fill="#111827" />
            <path d="M60 45L180 40" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            
            {/* Pans and Lilies */}
            <g transform="translate(60, 45)">
              <line x1="0" y1="0" x2="-20" y2="40" stroke="#111827" strokeWidth="1" />
              <line x1="0" y1="0" x2="20" y2="40" stroke="#111827" strokeWidth="1" />
              <path d="M-25 40C-25 40 -15 55 25 40L-25 40Z" fill="#111827" />
              <g transform="translate(0, 35) scale(0.6)">
                <path d="M0 -20 C10 -20 15 0 0 10 C-15 0 -10 -20 0 -20Z" fill="white" stroke="#111827" strokeWidth="1" />
                <path d="M0 -20 C25 -15 25 10 5 10 C25 10 25 -15 0 -20Z" fill="white" stroke="#111827" strokeWidth="1" />
                <path d="M0 -20 C-25 -15 -25 10 -5 10 C-25 10 -25 -15 0 -20Z" fill="white" stroke="#111827" strokeWidth="1" />
                <rect x="-10" y="8" width="20" height="4" rx="2" fill="#10B981" />
              </g>
            </g>
            <g transform="translate(180, 40)">
              <line x1="0" y1="0" x2="-20" y2="40" stroke="#111827" strokeWidth="1" />
              <line x1="0" y1="0" x2="20" y2="40" stroke="#111827" strokeWidth="1" />
              <path d="M-25 40C-25 40 -15 55 25 40L-25 40Z" fill="#111827" />
              <g transform="translate(0, 35) scale(0.6)">
                <path d="M0 -20 C10 -20 15 0 0 10 C-15 0 -10 -20 0 -20Z" fill="white" stroke="#111827" strokeWidth="1" />
                <path d="M0 -20 C25 -15 25 10 5 10 C25 10 25 -15 0 -20Z" fill="white" stroke="#111827" strokeWidth="1" />
                <path d="M0 -20 C-25 -15 -25 10 -5 10 C-25 10 -25 -15 0 -20Z" fill="white" stroke="#111827" strokeWidth="1" />
                <rect x="-10" y="8" width="20" height="4" rx="2" fill="#10B981" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
