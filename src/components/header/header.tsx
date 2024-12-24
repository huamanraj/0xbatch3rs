"use client";
import {
  TerminalLogo
} from "@/app/assets/images/svg";
import LightModeWarning from "../light-mode-warning/light-mode-warning";
import GlitchText from "../glitch-text/glitch-text";


export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-text-light">
      <div className="flex items-center space-x-1">
        <TerminalLogo className="size-8" />
        <h1 className={`font-pixel text-4xl font-black`}></h1>
        <GlitchText text="0xbatch3rs" className="text-4xl font-bold font-vt323" />
      </div>
      <LightModeWarning />
    </header>
  );
}