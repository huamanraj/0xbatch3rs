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
    <div className="border border-accent-green overflow-hidden text-text-light w-[700px] rounded-md bg-gradient-to-b from-transparent from-10% via-accent-green-dark via-100%">
      <button
        className="w-full relative py-4 px-6 text-left transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-accent-green-light pr-8">{question}</span>
        <Down
          className={`absolute right-6 top-1/2 -translate-y-1/2 size-5 text-accent-green-light transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-3 px-6">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}