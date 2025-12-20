"use client";

import { useState, useEffect, useMemo } from "react";
import { GridScan } from "../components/GridScan.jsx";
import ASCIIText from "../components/ASCIIText.jsx";
import DecryptedText from "../components/DecryptedText.jsx"

// --- COLORS ---
const LINES_COLOR = "hsla(200, 55%, 38%, 1.00)";
const SCAN_COLOR = "rgb(103, 201, 213)";
const TEXT_COLOR = "rgb(255, 242, 52)";
const PARTICLE_COLOR = "rgb(247, 54, 77)";

// --- ParticleField Behaviour  ---
const ParticleField = ({ count = 25, particleColor = PARTICLE_COLOR }) => {
  const bank = [
    "nullptr","segfault","SIGSEGV","undefined","NaN","exit(1)","print()",
    "printf()","cout <<","std::move","Promise.reject()","<!>","</>","{ }",
    ";","0x0","0xDEADBEEF","core dumped","malloc()","free()",
    "new","delete","async","await","throw","catch","error!","Hello, world!", 'string name = "";'
  ];

  const particles = useMemo(() => 
    new Array(count).fill(0).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.round(Math.random() * 14) + 10,
      dur: +(Math.random() * 1.25 + 0.25).toFixed(2),
      delay: +(Math.random() * -2).toFixed(2),
      phrase: bank[Math.floor(Math.random() * bank.length)],
      hueShift: +(Math.random() * 40 - 20).toFixed(1),
      rotate: +(Math.random() * 40 - 20).toFixed(1),
      opacity: +(Math.random() * 0.6 + 0.35).toFixed(2)
    })),
  [count, bank]);

  const styleBlock = `
    .pf-wrapper { position: absolute; inset: 0; pointer-events: none; overflow: visible; z-index: 8; }
    .pf-particle { position: absolute; will-change: transform, filter, opacity; white-space: nowrap; font-family: Consolas, monospace; mix-blend-mode: screen; user-select: none; pointer-events: none; transform-origin: center; }
    @keyframes pf-jitter { 0% { transform: translate3d(0,0,0) rotate(0deg); } 20% { transform: translate3d(2px,-3px,0) rotate(-2deg); } 40% { transform: translate3d(-3px,2px,0) rotate(1deg); } 60% { transform: translate3d(4px,3px,0) rotate(-1deg); } 80% { transform: translate3d(-2px,-4px,0) rotate(2deg); } 100% { transform: translate3d(0,0,0) rotate(0deg); } }
    @keyframes pf-hue { 0% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(var(--h)); } 100% { filter: hue-rotate(0deg); } }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleBlock }} />
      <div className="pf-wrapper">
        {particles.map((p, i) => {
        const style: React.CSSProperties & Record<`--${string}`, string> = {
          left: `${p.left}%`,
          top: `${p.top}%`,
          fontSize: `${p.size}px`,
          opacity: p.opacity,
          transform: `translate(-50%, -50%) rotate(${p.rotate}deg)`,
          animation: `
            pf-jitter ${p.dur}s ease-in-out ${p.delay}s infinite alternate,
            pf-hue ${p.dur * 1.2}s ease-in-out ${p.delay}s infinite
          `,
          color: particleColor,
          "--h": `${p.hueShift}deg`,
          filter: `drop-shadow(0 0 ${Math.max(6, p.size / 2)}px ${particleColor})`
        };

        return (
          <span
            key={i}
            className="pf-particle"
            style={style}
          >
            {p.phrase}
          </span>
        );
      })}
      </div>
    </>
  );
};

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [asciiSize, setAsciiSize] = useState(100);
  const [textSize, setTextSize] = useState(100);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return; // mounted guard

    const duration = 2500;
    const start = performance.now();

    function animate(t: number) {
      const raw = Math.min((t - start) / duration, 1);
      const easeOutExpo = (x : number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
      const p = easeOutExpo(raw);
      const lerp = (a : number, b : number) => a + (b - a) * p;

      setAsciiSize(lerp(1000, 10));
      setTextSize(lerp(1000, 20));

      if (raw < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --lines-color: ${LINES_COLOR};
              --scan-color: ${SCAN_COLOR};
              --text-color: ${TEXT_COLOR};
              --particle-color: ${PARTICLE_COLOR};
            }
          `,
        }}
      />
      
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          background: "rgb(17,17,17)",
          overflow: "hidden",
        }}
      >
        <GridScan
          className=""
          style={{}}
          sensitivity={0}
          lineThickness={5}
          linesColor={LINES_COLOR} 
          gridScale={0.1}
          scanColor={SCAN_COLOR}
          scanOpacity={0.6}
          enablePost={true}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.004}
          scanDirection="pingpong"
          scanOnClick={true}
          scanDelay={2}
          scanDuration={2}
        />

        <ParticleField count={25} particleColor={PARTICLE_COLOR} />

        <style>{`
        @media (max-width: 900px) {
          h1 {
            bottom: 15% !important;
            width: 90% !important;
          }
        }

        @media (max-width: 400px) {
          h1 {
            bottom: 8% !important;
            font-size: 1.5rem !important;
            max-width: 90% !important;
          }
          .ascii-text-container {
            max-width: 100% !important;
          }
          .pf-wrapper {
            display: none;
          }
        }
      `}</style>`

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
        <ASCIIText
          text="CF '26"
          asciiFontSize={asciiSize}
          textFontSize={textSize}
          textColor={TEXT_COLOR}
          planeBaseHeight={8}
          enableWaves={false}
        />
        <h1
    style={{
      position: "absolute",
      bottom: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      margin: 0,
      padding: "0 20px",
      textAlign: "center",

      fontFamily: "Consolas, monospace",
      fontWeight: 700,
      fontSize: "42px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",

      color: "var(--text-color)", 

      background: "rgba(0,0,0,0.30)",
      borderRadius: "10px",
      backdropFilter: "blur(6px)",
    }}
  >
    Oakridge Codefest 2026
  </h1>
        </div>
      </div>
    </>
  );
}
