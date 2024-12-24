"use client";
import FAQs from "@/data/faq-data";
import GlitchText from "../glitch-text/glitch-text";
import Accordion from "../accordion/accordion";


export default function Faq() {

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <GlitchText
              text="Frequently Asked Questions"
              className="text-4xl md:text-5xl font-bold font-vt323"
            />
          </div>

          <div className="flex flex-col items-center gap-2 mx-auto">
            {FAQs.map((faq) => (
              <div key={faq.id}>
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