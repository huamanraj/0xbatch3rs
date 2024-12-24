import React from 'react';
import { ArrowRight, Terminal } from "@/app/assets/images/svg";

export default function CTA() {
  return (
    <div className="w-full flex items-center justify-center">
      <section className="w-full max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center space-y-4 w-full">
            <Terminal className="text-accent-green-light size-14" />
            <h1 className="text-4xl font-bold text-accent-green-light">Join the Elite</h1>
            <p className="text-lg text-gray-200 max-w-md text-center font-medium">
              Share your .bat arsenal. Build your reputation. Become part of the most powerful batch script community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-accent-green text-brand-primary font-bold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group">
              Upload Your First Script
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-accent-green-dark text-accent-green-light font-bold rounded-lg transition-all duration-200 hover:scale-105 border border-accent-green/20 hover:border-accent-green/40 flex items-center justify-center gap-2 group">
              <Terminal className="w-5 h-5 group-hover:rotate-3 transition-transform duration-200" />
              Explore Scripts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}