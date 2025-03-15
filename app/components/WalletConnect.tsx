'use client';

import { useState, useEffect } from 'react';

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window as any;
      if (solana?.isPhantom) {
        // Check if we have an active session
        const resp = await solana.connect({ onlyIfTrusted: true });
        if (resp.publicKey) {
          setWalletAddress(resp.publicKey.toString());
        }
      }
    } catch (error) {
      // Don't throw error for non-connected wallets
      console.log("No pre-connected wallet found");
    }
  };

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      const { solana } = window as any;
      
      if (!solana) {
        window.open('https://phantom.app/', '_blank');
        return;
      }

      if (solana.isPhantom) {
        try {
          // First, request connection
          const resp = await solana.connect();
          if (resp.publicKey) {
            console.log('Wallet connected with address:', resp.publicKey.toString());
            setWalletAddress(resp.publicKey.toString());
          }
        } catch (err: any) {
          if (err.code === 4001) {
            // User rejected the connection
            console.log('Please accept the connection request to continue');
          } else {
            console.error('Error connecting to wallet:', err);
          }
        }
      } else {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      const { solana } = window as any;
      if (solana) {
        await solana.disconnect();
        setWalletAddress('');
        console.log('Wallet disconnected');
      }
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
    setShowDropdown(false);
  };

  useEffect(() => {
    // Check for Phantom Wallet in the window object
    const checkForPhantom = () => {
      try {
        const { solana } = window as any;
        if (solana?.isPhantom) {
          checkIfWalletIsConnected();
          
          // Add event listeners for wallet state changes
          solana.on('connect', (publicKey: any) => {
            console.log('Wallet connected with address:', publicKey.toString());
            setWalletAddress(publicKey.toString());
          });

          solana.on('disconnect', () => {
            console.log('Wallet disconnected');
            setWalletAddress('');
          });

          solana.on('accountChanged', (publicKey: any) => {
            if (publicKey) {
              console.log('Wallet account changed:', publicKey.toString());
              setWalletAddress(publicKey.toString());
            } else {
              setWalletAddress('');
            }
          });

          // Cleanup listeners on unmount
          return () => {
            solana.removeAllListeners('connect');
            solana.removeAllListeners('disconnect');
            solana.removeAllListeners('accountChanged');
          };
        }
      } catch (error) {
        console.error('Error checking for Phantom wallet:', error);
      }
    };

    // Check immediately and then set up an interval to check periodically
    checkForPhantom();
    const interval = setInterval(checkForPhantom, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!walletAddress) {
    return (
      <button
        onClick={connectWallet}
        disabled={isConnecting}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-bold 
                   shadow-lg hover:shadow-purple-500/50 transition-all duration-300 
                   border border-purple-400/50 backdrop-blur-sm
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:scale-105 active:scale-95
                   flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        {isConnecting ? 'Connecting...' : 'Connect Phantom Wallet'}
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-bold 
                   shadow-lg hover:shadow-purple-500/50 transition-all duration-300 
                   border border-purple-400/50 backdrop-blur-sm
                   flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {`${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-purple-500/20 backdrop-blur-lg">
          <div className="py-1">
            <button
              onClick={disconnectWallet}
              className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-colors duration-150 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 