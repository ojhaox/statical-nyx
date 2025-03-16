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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors">
                Statical Nyx
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link 
                href="/docs" 
                className="px-3 py-2 text-sm sm:text-base rounded-md bg-green-500/30 text-green-300 hover:bg-green-500/40 hover:text-green-200 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 flex items-center space-x-2"
              >
                <span>Documentations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </Link>
              <Link
                href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=STCNYX"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm sm:text-base rounded-md bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors flex items-center space-x-2"
              >
                <span>Buy $STCNYX</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/StaticalNyx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-green-500/30 text-green-300 hover:bg-green-500/40 hover:text-green-200 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link
                href="https://t.me/StaticalNyx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-green-500/30 text-green-300 hover:bg-green-500/40 hover:text-green-200 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.065-1.225-.461-1.9-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>
              <button
                onClick={connectWallet}
                className="px-3 py-2 text-sm sm:text-base rounded-md bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors flex items-center space-x-2"
              >
                <span>{isConnected ? 'Connected' : 'Connect Wallet'}</span>
                {isConnected && (
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-2 sm:px-4 lg:px-8 py-8 pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Statical Nyx Protocol
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Quantum-secured cross-chain protocol for next-generation blockchain infrastructure
            </p>
          </div>

          {/* Matrix-style Info Box */}
          <div className="bg-black/30 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6 mb-6 sm:mb-8 font-mono text-xs sm:text-sm lg:text-base">
            <div className="text-green-400 mb-2">{'>'} SYSTEM::INITIALIZE</div>
            <div className="text-green-500">Statical Nyx Protocol_|</div>
            <div className="text-green-400 mt-2">{'>'} CA:</div>
            <div className="text-green-500 ml-2 sm:ml-4">{'>'} Quantum-secured cross-chain protocol for next-generation blockchain infrastructure_</div>
          </div>

          {/* Embedded dApp */}
          <div className="mt-6 sm:mt-8 relative left-[50%] right-[50%] -translate-x-1/2 w-[100vw] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-4rem)]">
            <iframe
              src="https://app.nyxcipher.ai/projects"
              className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-none border-x-0 border-green-500/20 bg-black/50 shadow-lg shadow-green-500/10"
              allow="clipboard-write; web3; ethereum; solana"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
            />
          </div>

          {/* How to Use Section */}
          <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              How to Use
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {/* Step 1 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono text-sm sm:text-base mr-2 sm:mr-3">1</div>
                  <h3 className="text-base sm:text-lg font-semibold text-green-400">Connect Wallet</h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Install Phantom Wallet and connect it to access the dApp features.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono text-sm sm:text-base mr-2 sm:mr-3">2</div>
                  <h3 className="text-base sm:text-lg font-semibold text-green-400">Select Project</h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Browse through available projects and select one that interests you.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono text-sm sm:text-base mr-2 sm:mr-3">3</div>
                  <h3 className="text-base sm:text-lg font-semibold text-green-400">Review Details</h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Check project specifications and requirements before proceeding.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6 hover:border-green-500/40 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-mono text-sm sm:text-base mr-2 sm:mr-3">4</div>
                  <h3 className="text-base sm:text-lg font-semibold text-green-400">Execute Transaction</h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Confirm the transaction in your Phantom Wallet to complete the process.</p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 sm:mt-12 bg-black/30 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-3 sm:mb-4">Important Notes</h3>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Important Notes:</h4>
                <ul className="space-y-2 text-sm text-green-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>Always verify transaction details before confirming</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>Keep your wallet secure and never share private keys</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">•</span>
                    <span>For support, contact our team at support@staticalnyx.ai</span>
                  </li>
                </ul>
              </div>
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