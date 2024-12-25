import socialLinks from '@/data/socials-data'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="w-full border-t border-accent-green-dark backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <pre className="whitespace-pre font-mono text-accent-green-light text-[10px] font-bold">
            {`  / _ \\
\\_\\(_)/_/
 _//"\\_ 
  /   \\`}
            </pre>
            <div className="space-y-1.5">
              <div className="font-mono text-accent-green-light text-sm font-bold">
                [©] Copyright 2024
              </div>
              <div className="font-mono text-accent-green-light text-xs font-bold">
                VER 1.0.0
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto">
            {socialLinks.map((person) => (
              <div key={person.name} className="space-y-3">
                <h3 className="font-mono text-accent-green-light text-lg font-bold">
                  {person.name}
                </h3>
                <div className="flex items-center gap-4">
                  {person.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <link.icon className="size-5 text-accent-green transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,204,99,0.6)]" />
                      <span className="sr-only">{link.icon.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}