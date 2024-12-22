import { SVGProps } from "react";


export const TerminalLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="terminal"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    {...props}
    fill="#00FF00"
  >
    <g>
      <path d="M31,59.1v393.8h450V59.1H31z M452.9,424.8H59.1V87.2h393.8V424.8z M424.8,115.4H87.2v281.2h337.5V115.4z M227.9,256h-28.1   v28.1h-28.1v28.1h-28.1v-28.1h28.1V256h28.1v-28.1h-28.1v-28.1h-28.1v-28.1h28.1v28.1h28.1v28.1h28.1V256z M340.4,312.2H256v-28.1   h84.4V312.2z" />
    </g>
  </svg>
);


export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="menu"
    {...props}
  >
    <line x1={4} x2={20} y1={12} y2={12} />
    <line x1={4} x2={20} y1={6} y2={6} />
    <line x1={4} x2={20} y1={18} y2={18} />
  </svg>
);


export const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="sun"
    {...props}
  >
    <circle cx={12} cy={12} r={4} />
    <path d="M12 4h.01" />
    <path d="M20 12h.01" />
    <path d="M12 20h.01" />
    <path d="M4 12h.01" />
    <path d="M17.657 6.343h.01" />
    <path d="M17.657 17.657h.01" />
    <path d="M6.343 17.657h.01" />
    <path d="M6.343 6.343h.01" />
  </svg>
);


export const MoonStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="moon-star"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </svg>
);


export const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)