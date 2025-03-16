'use client';

import Link from 'next/link';

export default function Docs() {
  return (
    <main className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Digital Rain Animation - Left Side */}
      <div className="fixed left-0 top-0 bottom-0 w-32 opacity-30 z-0 overflow-hidden">
        <div className="digital-rain"></div>
      </div>

      {/* Digital Rain Animation - Right Side */}
      <div className="fixed right-0 top-0 bottom-0 w-32 opacity-30 z-0 overflow-hidden">
        <div className="digital-rain"></div>
      </div>

      {/* Side Panels */}
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-green-500/50 to-transparent z-10"></div>
      <div className="fixed right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-green-500/50 to-transparent z-10"></div>

      {/* Glowing Corner Effects */}
      <div className="fixed left-0 top-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full"></div>
      <div className="fixed right-0 top-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full"></div>
      <div className="fixed left-0 bottom-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full"></div>
      <div className="fixed right-0 bottom-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full"></div>

      {/* Matrix-like background animation */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'matrix-bg 20s linear infinite'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-green-500/20 backdrop-blur-md bg-black/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and Name */}
            <Link href="/" className="text-2xl font-mono font-bold text-green-400 tracking-tight">
              <span className="inline-block transform hover:scale-105 transition-transform">
                &lt;Statical_Nyx/&gt;
              </span>
            </Link>

            {/* Center - Navigation Links */}
            <div className="flex items-center gap-4">
              <nav className="flex items-center space-x-4">
                <div className="space-x-4 text-sm font-mono">
                  <Link href="/" className="text-green-400/70 hover:text-green-300 transition-colors">[dApp]</Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 rounded border border-green-500/20 text-green-400 hover:bg-green-500/10 
                             transition-all duration-300 hover:border-green-400"
                  >
                    [Buy]
                  </Link>
                  <Link href="/docs" className="text-green-400 transition-colors">[Docs]</Link>
                </div>
              </nav>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a
                  href="https://twitter.com/StaticalNyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400/70 hover:text-green-300 transition-colors transform hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/StaticalNyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400/70 hover:text-green-300 transition-colors transform hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-8 relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Documentation Header */}
          <div className="p-4 rounded border border-green-500/20 bg-black/50 shadow-lg shadow-green-500/10
                        transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-green-400">&gt; SYSTEM::DOCUMENTATION</span>
            </div>
            <h1 className="text-3xl font-mono font-bold mb-4 text-green-300">
              Technical Documentation_
              <span className="inline-block animate-blink">|</span>
            </h1>
            <p className="font-mono text-green-400/70">
              &gt; Comprehensive guide to the Statical Nyx Protocol and its implementation_
            </p>
          </div>

          {/* Documentation Sections */}
          <div className="mt-8 grid grid-cols-1 gap-6">
            {/* Vision & Mission */}
            <div className="p-6 rounded border border-green-500/20 bg-black/50
                          transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
              <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                &gt; Vision_&_Mission_
                <span className="inline-block animate-blink">|</span>
              </h2>
              <div className="space-y-4 font-mono text-sm text-green-400/70">
                <div>
                  <h3 className="text-green-300 mb-2">&gt; Vision_</h3>
                  <p>&gt; To revolutionize blockchain infrastructure through quantum-secure technology, enabling a new era of cross-chain interoperability and security_</p>
                </div>
                <div>
                  <h3 className="text-green-300 mb-2">&gt; Mission_</h3>
                  <p>&gt; Developing cutting-edge quantum-resistant protocols while maintaining accessibility and user-friendliness_</p>
                </div>
                <div>
                  <h3 className="text-green-300 mb-2">&gt; Core_Values_</h3>
                  <ul className="list-none space-y-2">
                    <li>&gt; Security_First: Implementing quantum-resistant encryption_</li>
                    <li>&gt; Innovation: Pushing blockchain technology boundaries_</li>
                    <li>&gt; Accessibility: Creating user-friendly interfaces_</li>
                    <li>&gt; Decentralization: Maintaining trustless operations_</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div className="p-6 rounded border border-green-500/20 bg-black/50
                          transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
              <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                &gt; Project_Roadmap_
                <span className="inline-block animate-blink">|</span>
              </h2>
              <div className="space-y-6 font-mono text-sm">
                {/* Phase 1 */}
                <div className="relative pl-8 pb-6 border-l border-green-500/20">
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-green-400 rounded-full"></div>
                  <h3 className="text-green-300 mb-2">&gt; Phase_1: Foundation [Q1 2024]_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Protocol architecture development_</li>
                    <li>&gt; Quantum encryption implementation_</li>
                    <li>&gt; Initial testnet deployment_</li>
                  </ul>
                </div>
                {/* Phase 2 */}
                <div className="relative pl-8 pb-6 border-l border-green-500/20">
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-green-400 rounded-full"></div>
                  <h3 className="text-green-300 mb-2">&gt; Phase_2: Expansion [Q2 2024]_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Cross-chain bridge implementation_</li>
                    <li>&gt; Security audits and optimizations_</li>
                    <li>&gt; Partnership developments_</li>
                  </ul>
                </div>
                {/* Phase 3 */}
                <div className="relative pl-8 pb-6 border-l border-green-500/20">
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-green-400 rounded-full"></div>
                  <h3 className="text-green-300 mb-2">&gt; Phase_3: Enhancement [Q3 2024]_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Advanced features deployment_</li>
                    <li>&gt; Ecosystem expansion_</li>
                    <li>&gt; Community governance implementation_</li>
                  </ul>
                </div>
                {/* Phase 4 */}
                <div className="relative pl-8 border-l border-green-500/20">
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-green-400 rounded-full"></div>
                  <h3 className="text-green-300 mb-2">&gt; Phase_4: Scaling [Q4 2024]_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Performance optimizations_</li>
                    <li>&gt; Additional chain integrations_</li>
                    <li>&gt; Enterprise solutions launch_</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Protocol Overview */}
              <div className="p-4 rounded border border-green-500/20 bg-black/50
                            transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
                <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                  &gt; Protocol_Overview_
                  <span className="inline-block animate-blink">|</span>
                </h2>
                <ul className="space-y-3 font-mono text-sm text-green-400/70">
                  <li>&gt; Architecture and Components_</li>
                  <li>&gt; Security Features_</li>
                  <li>&gt; Cross-Chain Mechanics_</li>
                  <li>&gt; Quantum Resistance_</li>
                </ul>
              </div>

              {/* Integration Guide */}
              <div className="p-4 rounded border border-green-500/20 bg-black/50
                            transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
                <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                  &gt; Integration_Guide_
                  <span className="inline-block animate-blink">|</span>
                </h2>
                <ul className="space-y-3 font-mono text-sm text-green-400/70">
                  <li>&gt; API Reference_</li>
                  <li>&gt; SDK Documentation_</li>
                  <li>&gt; Smart Contract Interface_</li>
                  <li>&gt; Example Implementations_</li>
                </ul>
              </div>
            </div>

            {/* Tokenomics & Governance */}
            <div className="p-6 rounded border border-green-500/20 bg-black/50
                          transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
              <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                &gt; Tokenomics_&_Governance_
                <span className="inline-block animate-blink">|</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
                {/* Tokenomics */}
                <div>
                  <h3 className="text-green-300 mb-3">&gt; Token_Distribution_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Total Supply: 100,000,000 NYX_</li>
                    <li>&gt; Protocol Development: 30%_</li>
                    <li>&gt; Community Rewards: 25%_</li>
                    <li>&gt; Team & Advisors: 15%_</li>
                    <li>&gt; Ecosystem Growth: 20%_</li>
                    <li>&gt; Reserve: 10%_</li>
                  </ul>
                </div>
                {/* Governance */}
                <div>
                  <h3 className="text-green-300 mb-3">&gt; Governance_Model_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Proposal Submission_</li>
                    <li>&gt; Voting Mechanisms_</li>
                    <li>&gt; Implementation Process_</li>
                    <li>&gt; Emergency Procedures_</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security & Network */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Security Model */}
              <div className="p-4 rounded border border-green-500/20 bg-black/50
                            transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
                <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                  &gt; Security_Model_
                  <span className="inline-block animate-blink">|</span>
                </h2>
                <ul className="space-y-3 font-mono text-sm text-green-400/70">
                  <li>&gt; Quantum Security Measures_</li>
                  <li>&gt; Encryption Protocols_</li>
                  <li>&gt; Attack Vectors & Mitigations_</li>
                  <li>&gt; Audit Reports_</li>
                </ul>
              </div>

              {/* Network Parameters */}
              <div className="p-4 rounded border border-green-500/20 bg-black/50
                            transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
                <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                  &gt; Network_Parameters_
                  <span className="inline-block animate-blink">|</span>
                </h2>
                <ul className="space-y-3 font-mono text-sm text-green-400/70">
                  <li>&gt; Chain Configurations_</li>
                  <li>&gt; Gas Optimization_</li>
                  <li>&gt; Performance Metrics_</li>
                  <li>&gt; Network Status_</li>
                </ul>
              </div>
            </div>

            {/* Community & Support */}
            <div className="p-6 rounded border border-green-500/20 bg-black/50
                          transform hover:scale-[1.01] transition-all duration-300 hover:border-green-400">
              <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
                &gt; Community_&_Support_
                <span className="inline-block animate-blink">|</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
                <div>
                  <h3 className="text-green-300 mb-3">&gt; Community_Channels_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Discord Community_</li>
                    <li>&gt; Telegram Group_</li>
                    <li>&gt; Twitter Updates_</li>
                    <li>&gt; Developer Forum_</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-300 mb-3">&gt; Developer_Resources_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; GitHub Repository_</li>
                    <li>&gt; Documentation_</li>
                    <li>&gt; Tutorial Videos_</li>
                    <li>&gt; Code Examples_</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-300 mb-3">&gt; Support_Options_</h3>
                  <ul className="space-y-2 text-green-400/70">
                    <li>&gt; Help Center_</li>
                    <li>&gt; Technical Support_</li>
                    <li>&gt; Bug Reports_</li>
                    <li>&gt; Feature Requests_</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 p-4 rounded border border-green-500/20 bg-black/50">
            <h2 className="text-xl font-mono font-bold mb-4 text-green-300">
              &gt; Additional_Resources_
              <span className="inline-block animate-blink">|</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
              <a href="#" className="p-3 rounded border border-green-500/20 text-green-400/70 hover:text-green-300 
                                   hover:border-green-400 transition-all duration-300">
                &gt; GitHub Repository_
              </a>
              <a href="#" className="p-3 rounded border border-green-500/20 text-green-400/70 hover:text-green-300 
                                   hover:border-green-400 transition-all duration-300">
                &gt; Technical Whitepaper_
              </a>
              <a href="#" className="p-3 rounded border border-green-500/20 text-green-400/70 hover:text-green-300 
                                   hover:border-green-400 transition-all duration-300">
                &gt; Developer Community_
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add Matrix-style keyframes animation */}
      <style jsx global>{`
        @keyframes matrix-bg {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        /* Digital Rain Animation */
        .digital-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg,
            rgba(0, 255, 0, 0) 0%,
            rgba(0, 255, 0, 0.1) 50%,
            rgba(0, 255, 0, 0) 100%
          );
          animation: digital-rain 20s linear infinite;
          background-size: 100% 200%;
        }

        @keyframes digital-rain {
          0% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 50% 200%;
          }
        }

        /* Add scanline effect */
        main::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 255, 0, 0.03) 0px,
            rgba(0, 255, 0, 0.03) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          animation: scanline 10s linear infinite;
        }

        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        /* Add glitch effect to headings */
        h1, h2 {
          position: relative;
        }

        h1::before, h2::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          clip-path: inset(0 0 0 0);
          animation: glitch 2s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-4px, 2px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(3px, -4px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(1px, 3px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(-3px, 1px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(2px, -4px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(-2px, 2px);
          }
        }
      `}</style>
    </main>
  );
} 