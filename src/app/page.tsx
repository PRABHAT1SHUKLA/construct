import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Zap, Users, ArrowRight, Menu, X } from 'lucide-react';

export default function CharAILanding() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChar, setActiveChar] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChar((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const characters = [
    { name: "Luna", role: "Creative Writer", gradient: "from-purple-500 to-pink-500" },
    { name: "Atlas", role: "Travel Guide", gradient: "from-blue-500 to-cyan-500" },
    { name: "Nova", role: "Tech Expert", gradient: "from-orange-500 to-red-500" }
  ];

  const features = [
    { icon: Sparkles, title: "AI Personalities", desc: "Unique characters with distinct personalities and knowledge" },
    { icon: MessageCircle, title: "Natural Conversations", desc: "Engage in flowing, context-aware dialogues" },
    { icon: Zap, title: "Instant Responses", desc: "Lightning-fast AI responses powered by latest models" },
    { icon: Users, title: "Diverse Characters", desc: "Thousands of characters across every topic imaginable" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CharAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#characters" className="hover:text-purple-400 transition">Characters</a>
            <a href="#community" className="hover:text-purple-400 transition">Community</a>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition">Features</a>
              <a href="#characters" className="block hover:text-purple-400 transition">Characters</a>
              <a href="#community" className="block hover:text-purple-400 transition">Community</a>
              <button className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-sm text-purple-300">✨ Next-Gen AI Conversations</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Chat with{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Anyone
            </span>
            <br />
            About Anything
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover thousands of AI characters or create your own. Have natural conversations, learn new things, and explore endless possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span className="font-semibold">Start Chatting</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm">
              Explore Characters
            </button>
          </div>

          {/* Character Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {characters.map((char, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  activeChar === i
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10 shadow-xl shadow-purple-500/20'
                    : 'border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/30'
                }`}
                onMouseEnter={() => setActiveChar(i)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${char.gradient} flex items-center justify-center text-2xl animate-bounce`}>
                  {char.name[0]}
                </div>
                <h3 className="text-xl font-bold mb-2">{char.name}</h3>
                <p className="text-gray-400 text-sm">{char.role}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 hover:from-purple-500/5 hover:to-pink-500/5 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">Everything you need for amazing AI conversations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Chatting?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join millions of users exploring the future of AI conversations
            </p>
            <button className="group px-12 py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto text-lg font-semibold">
              <span>Get Started Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 CharAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
