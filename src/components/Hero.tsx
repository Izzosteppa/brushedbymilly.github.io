import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Siyanda</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">Full-Stack Developer</p>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Passionate about creating beautiful, functional, and user-friendly applications
          that solve real-world problems.
        </p>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-500" size={32} />
        </div>
      </div>
    </section>
  );
}