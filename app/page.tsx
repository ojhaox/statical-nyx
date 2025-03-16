'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletAdapter, setWalletAdapter] = useState<PhantomWalletAdapter | null>(null);

  useEffect(() => {
    // Initialize Phantom wallet adapter
    const adapter = new PhantomWalletAdapter();
    setWalletAdapter(adapter);

    // Disconnect wallet on unmount/refresh
    return () => {
      if (adapter.connected) {
        adapter.disconnect().catch((error) => {
          console.error('Error disconnecting wallet:', error);
        });
      }
    };
  }, []);

  const connectWallet = async () => {
    if (!walletAdapter) return;

    try {
      // Check if Phantom is installed
      const provider = (window as any)?.phantom?.solana;
      if (!provider?.isPhantom) {
        window.open('https://phantom.app/', '_blank');
        return;
      }

      // Request permissions and connect
      await provider.connect({ onlyIfTrusted: false });
      await walletAdapter.connect();
      
      // Update connection state
      setIsConnected(true);
      setWalletAddress(walletAdapter.publicKey?.toString() || '');

      // Request additional permissions if needed
      const permissions = await provider.request({
        method: 'wallet_requestPermissions',
        params: [{
          eth_accounts: {},
          solana_signTransaction: {},
          solana_signMessage: {}
        }]
      }).catch(() => null);

      console.log('Wallet permissions:', permissions);

    } catch (error) {
      console.error('Error connecting wallet:', error);
      setIsConnected(false);
      setWalletAddress('');
    }
  };

  const disconnectWallet = async () => {
    if (!walletAdapter) return;

    try {
      await walletAdapter.disconnect();
      setIsConnected(false);
      setWalletAddress('');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

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
                  <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">[dApp]</Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 rounded border border-green-500/20 text-green-400 hover:bg-green-500/10 
                             transition-all duration-300 hover:border-green-400"
                  >
                    [Buy]
                  </Link>
                  <Link href="/docs" className="text-green-400/70 hover:text-green-300 transition-colors">[Docs]</Link>
                </div>
              </nav>
            </div>

            {/* Right side - Social Links and Wallet */}
            <div className="flex items-center space-x-4">
              {/* Social Links */}
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

              {/* Wallet Connect Button */}
              <button
                onClick={isConnected ? disconnectWallet : connectWallet}
                className="px-4 py-2 rounded border border-green-500/20 text-green-400 hover:bg-green-500/10 
                         transition-all duration-300 hover:border-green-400 font-mono"
              >
                {isConnected ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>[{walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}]</span>
                  </span>
                ) : (
                  '[Connect_Wallet]'
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Statical Nyx Protocol
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Quantum-secured cross-chain protocol for next-generation blockchain infrastructure
            </p>
          </div>

          {/* Matrix-style Info Box */}
          <div className="bg-black/30 border border-green-500/20 rounded-lg p-4 sm:p-6 mb-8 font-mono text-sm sm:text-base">
            <div className="text-green-400 mb-2">{'>'} SYSTEM::INITIALIZE</div>
            <div className="text-green-500">Statical Nyx Protocol_|</div>
            <div className="text-green-400 mt-2">{'>'} CA:</div>
            <div className="text-green-500 ml-4">{'>'} Quantum-secured cross-chain protocol for next-generation blockchain infrastructure_</div>
          </div>

          {/* Embedded dApp */}
          <div className="mt-8 relative left-[50%] right-[50%] -translate-x-1/2 w-[100vw] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-4rem)]">
            <iframe
              src="https://app.nyxcipher.ai/projects"
              className="w-full aspect-[21/9] rounded-none border-x-0 border-green-500/20 bg-black/50 shadow-lg shadow-green-500/10"
              allow="clipboard-write; web3; ethereum; solana"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
            />
          </div>

          {/* How to Use Section */}
          <div className="mt-16 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              How to Use
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Step 1 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-4 sm:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono mr-3">1</div>
                  <h3 className="text-lg font-semibold text-green-400">Connect Wallet</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Install Phantom Wallet and connect it to access the dApp features.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-4 sm:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono mr-3">2</div>
                  <h3 className="text-lg font-semibold text-green-400">Select Project</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Browse through available projects and select one that interests you.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-4 sm:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono mr-3">3</div>
                  <h3 className="text-lg font-semibold text-green-400">Review Details</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Check project specifications and requirements before proceeding.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-4 sm:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono mr-3">4</div>
                  <h3 className="text-lg font-semibold text-green-400">Execute Transaction</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Confirm the transaction in your Phantom Wallet to complete the process.</p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-12 bg-black/30 border border-green-500/20 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                <li>• Always verify transaction details before confirming</li>
                <li>• Keep your wallet secure and never share private keys</li>
                <li>• For support, contact our team at support@nyxcipher.ai</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

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