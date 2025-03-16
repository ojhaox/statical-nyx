'use client';

import { useState } from 'react';

export default function DappPage() {
  const [balance, setBalance] = useState('0.00');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Balance Display */}
        <div className="mb-8 p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-400">Available Balance</p>
              <h2 className="text-2xl font-bold">{balance} NYX</h2>
            </div>
            <button 
              className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 
                       text-purple-400 hover:bg-purple-500/20 transition-all duration-300"
              onClick={() => setBalance('0.00')}
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Transaction Section */}
        <div className="grid gap-4">
          <div className="p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20">
            <h3 className="text-lg font-medium mb-4">Send NYX</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Recipient Address</label>
                <input 
                  type="text" 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-2 
                           text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="Enter recipient address"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Amount</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-2 
                           text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
              <button 
                className="w-full px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 
                         text-purple-400 hover:bg-purple-500/20 transition-all duration-300"
                onClick={() => {
                  // Handle transaction
                  console.log('Sending', amount, 'NYX to', recipient);
                }}
              >
                Send Transaction
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 p-4 rounded-lg backdrop-blur-md bg-white/5 border border-purple-500/20">
          <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
          <div className="space-y-2">
            <div className="text-sm text-gray-400">No recent transactions</div>
          </div>
        </div>
      </div>
    </div>
  );
} 