'use client';

import React from 'react';
import Link from 'next/link';

export default function Documentation() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right orb */}
        <div className="absolute w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl -top-96 -right-96 animate-pulse"></div>
        {/* Bottom-left orb */}
        <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -bottom-96 -left-96 animate-pulse delay-1000"></div>
        {/* Additional animated elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute w-2 h-2 bg-purple-400/20 rounded-full top-1/4 right-1/4 animate-float"></div>
          <div className="absolute w-3 h-3 bg-blue-400/20 rounded-full bottom-3/4 left-1/4 animate-float-delayed"></div>
          <div className="absolute w-2 h-2 bg-purple-400/20 rounded-full top-1/4 right-1/3 animate-float"></div>
          <div className="absolute w-4 h-4 bg-blue-400/20 rounded-full bottom-1/3 left-1/3 animate-float-delayed"></div>
        </div>
      </div>

      {/* Grid overlay with enhanced pattern */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
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

      <div className="relative">
        {/* Header with full-width accent */}
        <div className="border-b border-purple-500/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Statical Nyx
              </Link>
              <div className="flex items-center space-x-6">
                <nav className="space-x-4 text-sm">
                  <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">dApp</Link>
                  <Link href="/docs" className="text-purple-400">Documentation</Link>
                </nav>
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
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Content with side decorations */}
        <div className="container mx-auto px-4 py-6 relative">
          {/* Side decorations */}
          <div className="absolute left-0 top-0 w-32 h-full border-l border-purple-500/20 -ml-16 hidden lg:block"></div>
          <div className="absolute right-0 top-0 w-32 h-full border-r border-purple-500/20 -mr-16 hidden lg:block"></div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction with enhanced styling */}
            <section className="space-y-3">
              <h1 className="text-3xl font-bold gradient-text mb-4 flex items-center">
                Documentation
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse ml-3"></div>
              </h1>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-3 hover-glow">
                <p className="text-sm leading-relaxed">
                  Statical Nyx is an advanced cryptographic interface that leverages quantum-secured blockchain protocols 
                  to provide unprecedented security and efficiency in decentralized operations.
                </p>
              </div>
            </section>

            {/* Getting Started with enhanced styling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold gradient-text">Getting Started</h2>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <div>
                  <h3 className="text-base font-semibold text-blue-400 mb-2">System Requirements</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                    <li>Modern web browser with Web3 support</li>
                    <li>Phantom Wallet browser extension</li>
                    <li>Stable internet connection</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Features with enhanced styling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold gradient-text">Core Features</h2>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <div>
                  <h3 className="text-base font-semibold text-blue-400 mb-2">Quantum-Secured Protocol</h3>
                  <p className="text-sm text-gray-300">
                    Our quantum-resistant encryption ensures your transactions remain secure even against quantum computing attacks.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Specifications with enhanced styling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold gradient-text">Technical Specifications</h2>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-purple-500/20">
                    <tr className="text-gray-300">
                      <td className="py-2 font-medium">Version</td>
                      <td className="py-2">1.0.0</td>
                    </tr>
                    <tr className="text-gray-300">
                      <td className="py-2 font-medium">Network</td>
                      <td className="py-2">Solana Mainnet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Security with enhanced styling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold gradient-text">Security Architecture</h2>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <div>
                  <h3 className="text-base font-semibold text-blue-400 mb-2">Security Layers</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                    <li>Quantum-resistant encryption</li>
                    <li>Multi-signature validation</li>
                    <li>Real-time threat monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Troubleshooting with enhanced styling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold gradient-text">Troubleshooting Guide</h2>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <div>
                  <h3 className="text-base font-semibold text-blue-400 mb-2">Common Issues</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                    <li>Wallet connection issues</li>
                    <li>Transaction delays</li>
                    <li>Network congestion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Support with enhanced styling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold gradient-text">Support Resources</h2>
              <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <h3 className="text-base font-semibold text-purple-400 mb-1">Community</h3>
                    <p className="text-xs text-gray-300">Join our Telegram group for community support and updates.</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <h3 className="text-base font-semibold text-blue-400 mb-1">Technical Support</h3>
                    <p className="text-xs text-gray-300">Visit our GitHub repository for technical documentation.</p>
                  </div>
                </div>
              </div>
            </section>
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