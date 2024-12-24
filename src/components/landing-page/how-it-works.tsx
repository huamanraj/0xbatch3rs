import GlitchText from "../glitch-text/glitch-text";
import HowItWorksData from "@/data/how-it-works-data";


export default function HowItWorks() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <GlitchText
              text="How it works?"
              className="text-4xl md:text-5xl font-bold font-vt323"
            />
          </div>

          <div className="flex flex-col items-center gap-16 max-w-lg mx-auto">
            {HowItWorksData.map((data) => (
              <div key={data.id} className="flex flex-col items-center text-center">
                <div className="mb-6 bg-accent-green-light rounded-full p-6">
                  <data.icon className="size-12 text-background" />
                </div>
                <h3 className="text-accent-green-light text-2xl font-bold mb-2">
                  {data.title}
                </h3>
                <p className="text-text-light font-medium">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}