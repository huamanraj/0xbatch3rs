import featuresData from "@/data/features-data";
import GlitchText from "../glitch-text/glitch-text";

export default function Features() {


  return (
    <>
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12">
          <GlitchText
            text="Features"
            className="text-4xl md:text-6xl font-bold font-vt323"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-brand-primary border border-accent-green/50 rounded-lg p-6 md:p-8 
              transition-all duration-300 hover:border-accent-green hover:scale-[1.02]
              hover:shadow-[0_0_15px_rgba(0,255,0,0.15)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <feature.icon className="text-accent-green-light size-8 md:size-12
                transition-transform duration-300 group-hover:scale-110" />
                <h2 className="text-accent-green-light font-bold text-2xl md:text-4xl font-vt323">
                  {feature.heading}
                </h2>
              </div>
              <p className="font-medium text-text-light/90 leading-relaxed">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}