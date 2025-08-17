import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter-tight">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Logo/Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Corekits
          </h1>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            🥳 Thank You! You're In.
          </h2>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed">
            Welcome to the $10K/Month Faceless ASMR Kit. Everything you need is ready for instant download.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
            ⬇️ Step-by-Step: Access Your Kit
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <p className="text-lg font-medium text-gray-600 pt-1">
                Click the "Access Now" button below
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-lg font-medium text-gray-600 pt-1">
                You will get access to kit
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <p className="text-lg font-medium text-gray-600 pt-1">
                Download & start building your AI ASMR channel
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
  <a 
    href="https://wa.me/9337168486" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl hover:from-indigo-600 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
  >
    Get Your Kit Now
  </a>
</div>


        {/* Help Section */}
        <div className="text-center mb-12">
          <p className="text-lg font-medium text-gray-600 mb-4">
            💬 Need Help? Chat with us anytime on WhatsApp
          </p>
          <a 
            href="https://wa.me/9337168486" 
            className="inline-block text-indigo-500 font-bold text-lg hover:text-indigo-600 transition-colors duration-200"
          >
            👉 Open WhatsApp Chat
          </a>
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="text-sm italic text-gray-600">
            🛡️ This kit is for your personal use only. Do not share or redistribute the files.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
