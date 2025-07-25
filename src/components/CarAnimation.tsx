import React from 'react';

interface CarAnimationProps {
  className?: string;
  loop?: boolean;
}

const CarAnimation: React.FC<CarAnimationProps> = ({ 
  className = '', 
  loop = true 
}) => {
  return (
    <div className={`relative w-full h-20 overflow-hidden ${className}`}>
      <div 
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          loop ? 'animate-car-move' : 'animate-car-move-once'
        }`}
        style={{
          animation: loop 
            ? 'carMove 4s ease-in-out infinite' 
            : 'carMoveOnce 3s ease-in-out'
        }}
      >
        {/* SVG Car */}
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Car Body */}
          <rect
            x="10"
            y="15"
            width="50"
            height="15"
            rx="5"
            fill="#3B82F6"
            stroke="#1E40AF"
            strokeWidth="1"
          />
          
          {/* Car Roof */}
          <rect
            x="20"
            y="8"
            width="30"
            height="12"
            rx="4"
            fill="#1E40AF"
          />
          
          {/* Front Wheel */}
          <circle
            cx="20"
            cy="32"
            r="6"
            fill="#374151"
            stroke="#111827"
            strokeWidth="1"
          />
          <circle
            cx="20"
            cy="32"
            r="3"
            fill="#6B7280"
          />
          
          {/* Rear Wheel */}
          <circle
            cx="50"
            cy="32"
            r="6"
            fill="#374151"
            stroke="#111827"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="32"
            r="3"
            fill="#6B7280"
          />
          
          {/* Car Windows */}
          <rect
            x="22"
            y="10"
            width="8"
            height="8"
            rx="2"
            fill="#E5E7EB"
            opacity="0.8"
          />
          <rect
            x="40"
            y="10"
            width="8"
            height="8"
            rx="2"
            fill="#E5E7EB"
            opacity="0.8"
          />
          
          {/* Headlight */}
          <circle
            cx="8"
            cy="20"
            r="3"
            fill="#FEF3C7"
            stroke="#F59E0B"
            strokeWidth="1"
          />
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes carMove {
          0% { transform: translateX(-100px); }
          50% { transform: translateX(calc(100vw - 100px)); }
          100% { transform: translateX(-100px); }
        }
        
        @keyframes carMoveOnce {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 50px)); }
        }
      `}</style>
    </div>
  );
};

export default CarAnimation;