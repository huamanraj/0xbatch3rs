import { BinaryBackground } from "../binary-background/binary-background"; 
import GlitchText from "../glitch-text/glitch-text";   

export default function Hero() {    
  return (     
    <>       
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden font-sans">       
        <BinaryBackground />       
        <div className="relative z-10 container mx-auto px-4">         
          <div className="w-full mx-auto">           
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />           
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />                      

            <div className="text-center relative">             
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-secondary border border-accent-green/20 font-medium">               
                <span className="text-accent-green">Batchers:</span>               
                <span className="text-text-light/70 ml-2">Empowering Safe Script Sharing</span>             
              </div>                          

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-light mb-6 leading-tight sm:leading-none">               
                <span className="block mb-4">                 
                  <GlitchText text="Batchers:" className="" />               
                </span>               
                <span className="block mb-4 bg-gradient-to-b from-text-light to-text-light/60 bg-clip-text text-transparent">                 
                  Share, Discover,               
                </span>               
                <span className="block bg-gradient-to-b from-accent-green via-accent-green-light to-accent-green bg-clip-text text-transparent">                 
                  Power of .BAT               
                </span>             
              </h1>              

              <p className="text-xl sm:text-2xl text-text-light/70 mb-8 max-w-3xl mx-auto leading-relaxed">               
                Your <span className="text-accent-green">secure sanctuary</span> for sharing and discovering Windows batch scripts.                
                Join the elite community of <span className="text-accent-green-light">batchers</span>.             
              </p>              

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">               
                <button className="w-full sm:w-auto px-8 py-4 bg-accent-green hover:bg-accent-green-dark text-brand-primary font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 group">                 
                  {/* <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" /> */}                 
                  Share Your Script               
                </button>               
                <button className="w-full sm:w-auto px-8 py-4 bg-brand-secondary hover:bg-brand-tertiary text-text-light font-bold rounded-lg transition-all transform hover:scale-105 border border-accent-green/20 hover:border-accent-green/40 flex items-center justify-center gap-2 group">                 
                  {/* <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" /> */}                 
                  Explore Scripts               
                </button>             
              </div>           
            </div>         
          </div>       
        </div>     
      </div>     
    </>   
  ); 
}
