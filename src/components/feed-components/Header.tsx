"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("NEWEST");
  const tabs: string[] = ["NEWEST", "TRENDING", "FOLLOWING"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="bg-[var(--brand-primary)] h-16 flex items-center px-4">
      <div className="flex  m-1 mx-auto bg-[var(--brand-secondary)] rounded-full  overflow-x-auto max-w-full relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-xs sm:text-sm md:text-base sm:px-4 md:px-4 sm:py-2 whitespace-nowrap transition-all duration-300 ease-in-out relative z-10 ${
              activeTab === tab
                ? "text-[var(--accent-green)]"
                : "text-[var(--text-light)] hover:text-[var(--accent-green-light)]"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
        <div
          className="absolute rounded-full bg-[var(--brand-tertiary)] transition-all duration-300 ease-in-out"
          style={{
            left: `${(tabs.indexOf(activeTab) * 100) / tabs.length}%`,
            width: `calc(${100 / tabs.length}% - 4px)`,
            height: "calc(100% - 4px)",
            top: "2px",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
