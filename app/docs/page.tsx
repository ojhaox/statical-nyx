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
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Statical Nyx
              </Link>
              <div className="flex items-center space-x-6">
                <nav className="space-x-4">
                  <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">dApp</Link>
                  <Link href="/docs" className="text-purple-400">Documentation</Link>
                </nav>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://twitter.com/StaticalNyx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://t.me/StaticalNyx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Content with side decorations */}
        <div className="container mx-auto px-4 py-8 relative">
          {/* Side decorations */}
          <div className="absolute left-0 top-0 w-32 h-full border-l border-purple-500/20 -ml-16 hidden lg:block"></div>
          <div className="absolute right-0 top-0 w-32 h-full border-r border-purple-500/20 -mr-16 hidden lg:block"></div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction with enhanced styling */}
            <section className="space-y-4">
              <h1 className="text-4xl font-bold gradient-text mb-6 flex items-center">
                Statical Nyx Documentation
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse ml-4"></div>
              </h1>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-4 hover-glow">
                <p className="text-lg">
                  Statical Nyx is an advanced cryptographic interface that leverages quantum-secured blockchain protocols 
                  to provide a seamless and secure decentralized environment. Built on the Solana blockchain, it offers 
                  unparalleled security and performance for next-generation cryptographic operations.
                </p>
                <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="text-purple-400 font-semibold mb-2">Key Benefits</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Quantum-resistant security protocols</li>
                    <li>High-throughput transaction processing</li>
                    <li>Low-latency operations</li>
                    <li>Advanced cryptographic features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Getting Started with enhanced styling */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Getting Started</h2>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-6 hover-glow">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">System Requirements</h3>
                  <div className="mt-2 space-y-4">
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Minimum Requirements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Modern web browser (Chrome 88+, Firefox 87+, Brave)</li>
                        <li>4GB RAM minimum</li>
                        <li>Stable internet connection (5Mbps+)</li>
                        <li>Phantom Wallet browser extension</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Recommended Setup</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Chrome/Brave latest version</li>
                        <li>8GB RAM or more</li>
                        <li>High-speed internet (20Mbps+)</li>
                        <li>Hardware wallet support (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Wallet Setup</h3>
                  <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>Install Phantom Wallet from the official website
                      <div className="ml-6 mt-2 text-sm">
                        <code className="bg-purple-500/10 px-2 py-1 rounded">https://phantom.app</code>
                      </div>
                    </li>
                    <li>Create a new wallet or import existing
                      <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                        <li>Securely store your seed phrase</li>
                        <li>Set a strong password</li>
                      </ul>
                    </li>
                    <li>Fund your wallet with SOL
                      <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                        <li>Minimum recommended: 0.1 SOL</li>
                        <li>Use reputable exchanges</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Features with enhanced styling */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Core Features</h2>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-6 hover-glow">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Quantum-Secured Protocol</h3>
                  <div className="mt-4 space-y-4">
                    <p>
                      Our quantum-resistant cryptographic algorithms provide future-proof security for all transactions 
                      and data exchanges. The protocol implements:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Post-quantum cryptographic schemes
                        <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                          <li>Lattice-based cryptography</li>
                          <li>Hash-based signatures</li>
                          <li>Multivariate cryptography</li>
                        </ul>
                      </li>
                      <li>Advanced encryption standards
                        <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                          <li>AES-256 encryption</li>
                          <li>ChaCha20-Poly1305</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Decentralized Architecture</h3>
                  <div className="mt-4 space-y-4">
                    <p>
                      Built on Solana's high-performance blockchain, ensuring fast, secure, and scalable operations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Performance</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>65,000 TPS capability</li>
                          <li>400ms block time</li>
                          <li>Sub-second finality</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Scalability</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Horizontal scaling</li>
                          <li>Parallel processing</li>
                          <li>Proof of History</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Advanced Cryptographic Interface</h3>
                  <div className="mt-4 space-y-4">
                    <p>
                      Our interface provides seamless access to complex cryptographic operations while maintaining 
                      user-friendly accessibility.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Features</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Zero-knowledge proofs</li>
                          <li>Homomorphic encryption</li>
                          <li>Secure multi-party computation</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Use Cases</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Private transactions</li>
                          <li>Secure data sharing</li>
                          <li>Verifiable computations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specifications with enhanced styling */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Technical Specifications</h2>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-6 hover-glow">
                <table className="w-full">
                  <tbody className="divide-y divide-purple-500/20">
                    <tr className="py-2">
                      <td className="py-2 font-semibold text-blue-400">Blockchain Platform</td>
                      <td className="py-2">
                        <div>Solana</div>
                        <div className="text-sm text-gray-400">Version 1.14.x</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-blue-400">Smart Contract Language</td>
                      <td className="py-2">
                        <div>Rust</div>
                        <div className="text-sm text-gray-400">Anchor Framework</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-blue-400">Client SDK</td>
                      <td className="py-2">
                        <div>TypeScript/JavaScript</div>
                        <div className="text-sm text-gray-400">@solana/web3.js, @project-serum/anchor</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-blue-400">Consensus Mechanism</td>
                      <td className="py-2">
                        <div>Proof of Stake (PoS)</div>
                        <div className="text-sm text-gray-400">With Proof of History (PoH)</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-blue-400">Transaction Speed</td>
                      <td className="py-2">
                        <div>65,000 TPS</div>
                        <div className="text-sm text-gray-400">Sub-second finality</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-blue-400">Network Requirements</td>
                      <td className="py-2">
                        <div>5 Mbps minimum</div>
                        <div className="text-sm text-gray-400">20+ Mbps recommended</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Security with enhanced styling */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Security Architecture</h2>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-6 hover-glow">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Security Layers</h3>
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Protocol Level</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Quantum-resistant algorithms</li>
                          <li>Zero-knowledge proofs</li>
                          <li>Secure multi-party computation</li>
                          <li>Post-quantum encryption</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Network Level</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>End-to-end encryption</li>
                          <li>TLS 1.3 protocol</li>
                          <li>DDoS protection</li>
                          <li>Rate limiting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Application Level</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Secure wallet integration</li>
                          <li>Transaction signing</li>
                          <li>Access control</li>
                          <li>Audit logging</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-500/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Data Level</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Encrypted storage</li>
                          <li>Secure key management</li>
                          <li>Data integrity checks</li>
                          <li>Backup encryption</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Security Best Practices</h3>
                  <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Always verify transaction details before signing</li>
                      <li>Use hardware wallets for large holdings</li>
                      <li>Enable all security features in Phantom wallet</li>
                      <li>Regularly update your browser and wallet</li>
                      <li>Never share private keys or seed phrases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting with enhanced styling */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Troubleshooting Guide</h2>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-6 hover-glow">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Common Issues</h3>
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Connection Issues</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Phantom Wallet not responding
                          <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-400">
                            <li>Restart browser</li>
                            <li>Clear browser cache</li>
                            <li>Reinstall Phantom</li>
                          </ul>
                        </li>
                        <li>Network connectivity
                          <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-400">
                            <li>Check internet connection</li>
                            <li>Disable VPN/Proxy</li>
                            <li>Try different network</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Transaction Errors</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Insufficient balance
                          <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-400">
                            <li>Check SOL balance</li>
                            <li>Account for transaction fees</li>
                          </ul>
                        </li>
                        <li>Transaction timeout
                          <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-400">
                            <li>Check network status</li>
                            <li>Retry during lower congestion</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Error Codes</h3>
                  <div className="mt-4">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th className="py-2 text-purple-400">Code</th>
                          <th className="py-2 text-purple-400">Description</th>
                          <th className="py-2 text-purple-400">Solution</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-500/20">
                        <tr>
                          <td className="py-2 font-mono">ERR_001</td>
                          <td className="py-2">Wallet Connection Failed</td>
                          <td className="py-2 text-sm">Restart browser and wallet</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">ERR_002</td>
                          <td className="py-2">Insufficient Balance</td>
                          <td className="py-2 text-sm">Add more SOL to wallet</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">ERR_003</td>
                          <td className="py-2">Network Congestion</td>
                          <td className="py-2 text-sm">Retry transaction later</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Support with enhanced styling */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Support Resources</h2>
              <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 shadow-xl space-y-6 hover-glow">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-500/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Community Support</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Discord Community</li>
                      <li>GitHub Discussions</li>
                      <li>Reddit Subreddit</li>
                      <li>Telegram Group</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-500/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Technical Support</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Documentation</li>
                      <li>API Reference</li>
                      <li>Email Support</li>
                      <li>Developer Forum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Enhanced footer */}
        <footer className="border-t border-purple-500/20 backdrop-blur-sm mt-12">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Powered by Next.js and Solana Blockchain</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
} 