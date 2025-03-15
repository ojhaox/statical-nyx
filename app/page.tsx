'use client';
import React from 'react';
import Link from 'next/link';
import WalletConnect from './components/WalletConnect';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left orb */}
        <div className="absolute w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl -top-96 -left-96 animate-pulse"></div>
        {/* Bottom-right orb */}
        <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -bottom-96 -right-96 animate-pulse delay-1000"></div>
        {/* Additional animated elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute w-2 h-2 bg-purple-400/20 rounded-full top-1/4 left-1/4 animate-float"></div>
          <div className="absolute w-3 h-3 bg-blue-400/20 rounded-full top-3/4 right-1/4 animate-float-delayed"></div>
          <div className="absolute w-2 h-2 bg-purple-400/20 rounded-full bottom-1/4 left-1/3 animate-float"></div>
          <div className="absolute w-4 h-4 bg-blue-400/20 rounded-full top-1/3 right-1/3 animate-float-delayed"></div>
        </div>
      </div>

      {/* Grid overlay with enhanced pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#2020204d 1px, transparent 1px),
            linear-gradient(90deg, #2020204d 1px, transparent 1px),
            linear-gradient(#2020204d 0.5px, transparent 0.5px),
            linear-gradient(90deg, #2020204d 0.5px, transparent 0.5px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px'
        }}
      ></div>

      {/* Tech decorations - Left side */}
      <div className="fixed left-0 top-0 bottom-0 w-48 pointer-events-none hidden lg:block">
        {/* Neural network visualization */}
        <div className="absolute inset-0 flex flex-col justify-between py-20 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-px bg-gradient-to-r from-purple-500/50 to-transparent w-full">
              <div className="absolute left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              <div className="absolute left-12 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float" style={{ animationDelay: `${i * 0.3}s` }}></div>
            </div>
          ))}
        </div>
        {/* Binary code animation */}
        <div className="absolute inset-0 font-mono text-xs text-purple-500/20 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="animate-slide" style={{ animationDelay: `${i * 0.5}s` }}>
              01001010 10101 0101
            </div>
          ))}
        </div>
      </div>

      {/* Tech decorations - Right side */}
      <div className="fixed right-0 top-0 bottom-0 w-48 pointer-events-none hidden lg:block">
        {/* Circuit pattern */}
        <div className="absolute inset-0 flex flex-col items-end justify-between py-20 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-px bg-gradient-to-l from-blue-500/50 to-transparent w-full">
              <div className="absolute right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              <div className="absolute right-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-delayed" style={{ animationDelay: `${i * 0.3}s` }}></div>
            </div>
          ))}
        </div>
        {/* AI Status indicators */}
        <div className="absolute right-4 top-1/4 space-y-4">
          <div className="text-right">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="text-xs font-mono text-purple-400">QUANTUM::ACTIVE</span>
              <span className="ml-2 inline-block w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="text-xs font-mono text-blue-400">AI::PROCESSING</span>
              <span className="ml-2 inline-block w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-100"></span>
            </div>
          </div>
        </div>
        {/* Matrix-style characters */}
        <div className="absolute inset-0 font-mono text-xs text-blue-500/20 text-right overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="animate-slide-left" style={{ animationDelay: `${i * 0.5}s` }}>
              ニックス マトリックス AI
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header section with full-width accent */}
        <div className="border-b border-purple-500/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Statical Nyx
              </h1>
              <div className="flex items-center gap-4">
                <nav className="flex items-center space-x-4">
                  <div className="space-x-4 text-sm">
                    <Link href="/" className="text-purple-400">dApp</Link>
                    <Link href="/docs" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://twitter.com/StaticalNyx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://t.me/StaticalNyx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  </div>
                </nav>
                <WalletConnect />
              </div>
            </div>
          </div>
        </div>

        {/* Main content with side decorations */}
        <div className="container mx-auto px-4 py-6 relative">
          {/* Side decorations */}
          <div className="absolute left-0 top-0 w-32 h-full border-l border-purple-500/20 -ml-16 hidden lg:block">
            {/* Left side neural connections */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div key={i} 
                     className="absolute w-8 h-px bg-gradient-to-r from-purple-500/30 to-transparent"
                     style={{ top: `${20 + i * 20}%`, left: '16px', transform: 'rotate(-30deg)' }}>
                  <div className="absolute right-0 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse" 
                       style={{ animationDelay: `${i * 0.2}s` }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 w-32 h-full border-r border-purple-500/20 -mr-16 hidden lg:block">
            {/* Right side neural connections */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div key={i} 
                     className="absolute w-8 h-px bg-gradient-to-l from-blue-500/30 to-transparent"
                     style={{ top: `${20 + i * 20}%`, right: '16px', transform: 'rotate(30deg)' }}>
                  <div className="absolute left-0 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse" 
                       style={{ animationDelay: `${i * 0.2}s` }}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 max-w-[90vw] mx-auto">
            {/* Info box with hover effect */}
            <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl 
                          transform hover:scale-[1.02] transition-all duration-300 hover:shadow-purple-500/10">
              <h2 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                <span className="mr-2">// SYSTEM::INITIALIZE</span>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-1.5 text-sm">
                <span className="block font-mono flex items-center">
                  <span className="text-purple-400 mr-2">{">"}</span>
                  <span className="typing-animation">Accessing quantum-secured blockchain protocol...</span>
                </span>
                <span className="block font-mono flex items-center">
                  <span className="text-purple-400 mr-2">{">"}</span>
                  <span>Initializing Statical Nyx v1.0.0</span>
                </span>
                <span className="block font-mono text-purple-400 flex items-center">
                  <span className="mr-2">{">"}</span>
                  <span>STATUS: Advanced cryptographic interface ready</span>
                </span>
                <span className="block mt-3 flex items-center text-xs">
                  <span className="text-purple-400 mr-2">▶</span>
                  Connect your neural link [Phantom Wallet] to access the encrypted matrix.
                </span>
              </div>
            </div>

            {/* dApp iframe with enhanced container */}
            <div className="relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform -skew-y-2"></div>
              <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-purple-500/20 shadow-2xl backdrop-blur-md
                            transform hover:scale-[1.01] transition-all duration-300">
                <iframe
                  src="https://app.nyxcipher.ai/projects"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced footer */}
        <footer className="border-t border-purple-500/20 backdrop-blur-sm mt-8">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">Powered by Next.js and Solana Blockchain</p>
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
} 