import React from 'react';
import CarAnimation from './components/CarAnimation';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header Section */}
      <header className="flex-1 flex flex-col justify-center items-center px-4 py-8">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #2563eb, #7c3aed, #4f46e5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            C4GT
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '32rem',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>
            Code for Governance Tech Platform
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex space-x-4 mb-8">
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#3b82f6',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#8b5cf6',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
            animationDelay: '0.1s'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#6366f1',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
            animationDelay: '0.2s'
          }}></div>
        </div>
      </header>

      {/* Car Animation Section */}
      <section className="py-8">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '1.5rem'
          }}>
            Innovation in Motion
          </h2>
          <CarAnimation className="mb-4" loop={true} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          marginBottom: '0.5rem'
        }}>
          Building the future of governance technology
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: '#9ca3af',
          fontStyle: 'italic'
        }}>
          Developed by vasu using claude
        </p>
      </footer>
    </div>
  );
};

export default App;
