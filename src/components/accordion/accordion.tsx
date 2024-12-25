import { Down } from "@/app/assets/images/svg";
import { useState } from "react";

export default function Accordion({
  question,
  answer,
}: {
  question: string,
  answer: string,
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border border-accent-green overflow-hidden text-text-light w-full rounded-md bg-gradient-to-b from-transparent from-10% via-accent-green-dark via-100%">
      <button
        className="w-full relative py-3 md:py-4 px-4 md:px-6 text-left transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-sm md:text-base text-accent-green-light pr-8 block">{question}</span>
        <Down
          className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 size-4 md:size-5 text-accent-green-light transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="py-2 md:py-3 px-4 md:px-6">
          <p className="text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}