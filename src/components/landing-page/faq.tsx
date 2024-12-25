"use client";
import FAQs from "@/data/faq-data";
import GlitchText from "../glitch-text/glitch-text";
import Accordion from "../accordion/accordion";


export default function Faq() {

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-6 md:mb-8">
            <GlitchText
              text="Frequently Asked Questions"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-vt323"
            />
          </div>

          <div className="flex flex-col items-center gap-2 mx-auto max-w-full">
            {FAQs.map((faq) => (
              <div key={faq.id} className="w-full max-w-4xl">
                <Accordion
                  question={faq.question}
                  answer={faq.answer}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}