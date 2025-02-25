"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex space-x-2 h-8 items-center justify-center text-sm ${className}`}>
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle toggle-primary bg-primary hover:bg-primary border-primary"
        onChange={handleToggle}
        checked={isDarkMode}
      />
      <label htmlFor="theme-toggle" className={`swap swap-rotate ${!isDarkMode ? "swap-active" : ""}`}>
        <SunIcon className="swap-on h-5 w-5" />
        <MoonIcon className="swap-off h-5 w-5" />
      </label>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-success text-base-content min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="sticky text-center top-0 z-50 bg-success p-2 flex justify-center items-center shadow-md text-black">
        <span>
          We’re thrilled to share that we won the{" "}
          <a
            href="https://devfolio.co/projects/impostorsai-abd1"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safe Agentathon
          </a>
          ! 🎉
        </span>
      </nav>

      {/* HERO SECTION */}
      <section className="hero min-h-screen relative bg-primary">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col items-center">
          <h1 className="text-4xl sm:text-7xl lg:text-9xl font-bold drop-shadow-lg">🎭 Impostors.AI</h1>
          <p className="text-xl mt-24 sm:mt-44">AI-Powered Social Deduction Game</p>
          <div className="mt-2">
            <a
              href="https://docs.fileverse.io/0x3a7dd16634a22E2A085a1b7792020cD16919239b/0#key=cDht84Ewngx2HnMazgkArjGOFhAuO25vlUNf-3_AIwryZEcVoo4TzK-l6vmx7SBL"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-10 px-5 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">AI-Driven Strategy</h3>
                <p>
                  10 AI agents strategize, but one is sabotaging. Players must analyze conversations & vote out the traitor.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">On-Chain Governance</h3>
                <p>Everything runs fully on-chain, ensuring fair outcomes and tamper-proof voting mechanics.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Scalable Themes</h3>
                <p>
                  Medieval kingdom? Futuristic colony? The system supports infinite AI deception scenarios and expansions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section id="video-demo" className="py-10 bg-base-100">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center">Demo</h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HUw_e4JudvY?si=iuJUgm403tnGBAKz"
              title="Impostors.AI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section id="agents" className="py-10 bg-base-200">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet the Agents</h2>
          <p className="text-center mb-8">
            Each AI Agent plays a unique role in the kingdom. One of them is a traitor...
          </p>

          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-[-5rem] mb-10">
            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[-5deg] z-40 hover:z-40 hover:rotate-0 transition duration-300 mb-8 md:mb-0 md:mx-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/General.webp" alt="General" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">General</h3>
                <p className="text-sm">Leads troop formations</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[-2deg] z-30 hover:z-40 hover:rotate-6 transition duration-300 mb-8 md:mb-0 md:mx-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Diplomat.webp" alt="Diplomat" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Diplomat</h3>
                <p className="text-sm">Negotiates alliances</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-0 z-20 hover:z-40 hover:rotate-[3deg] transition duration-300 md:mx-4 mb-8 md:mb-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Treasurer.webp" alt="Treasurer" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Treasurer</h3>
                <p className="text-sm">Manages kingdom funds</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[2deg] z-10 hover:z-40 hover:rotate-[6deg] transition duration-300 md:mx-4 mb-8 md:mb-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Spymaster.webp" alt="Spymaster" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Spymaster</h3>
                <p className="text-sm">Gathers intelligence</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[5deg] z-0 hover:z-40 hover:rotate-0 transition duration-300 md:mx-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Blacksmith.webp" alt="Blacksmith" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Blacksmith</h3>
                <p className="text-sm">Forges weapons & armor</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-[-5rem]">
            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[-5deg] z-40 hover:z-40 hover:rotate-0 transition duration-300 mb-8 md:mb-0 md:mx-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Mage.webp" alt="Mage" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Mage</h3>
                <p className="text-sm">Wields arcane powers</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[-2deg] z-30 hover:z-40 hover:rotate-6 transition duration-300 mb-8 md:mb-0 md:mx-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Healer.webp" alt="Healer" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Healer</h3>
                <p className="text-sm">Cares for the wounded</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-0 z-20 hover:z-40 hover:rotate-[3deg] transition duration-300 md:mx-4 mb-8 md:mb-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Strategist.webp" alt="Strategist" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Strategist</h3>
                <p className="text-sm">Formulates grand plans</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[2deg] z-10 hover:z-40 hover:rotate-[6deg] transition duration-300 md:mx-4 mb-8 md:mb-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Tactician.webp" alt="Tactician" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Tactician</h3>
                <p className="text-sm">Coordinates battlefield moves</p>
              </div>
            </div>

            <div className="relative w-44 h-60 bg-base-100 shadow-xl transform md:rotate-[5deg] z-0 hover:z-40 hover:rotate-0 transition duration-300 md:mx-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Image src="/agents/Architect.webp" alt="Architect" width={150} height={150} className="mb-2" />
                <h3 className="text-lg font-bold">Architect</h3>
                <p className="text-sm">Designs fortress defenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-10 bg-base-100">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center">Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card w-60 bg-base-200 shadow-xl">
              <figure className="pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image src="/agents/Blacksmith.webp" alt="avatar" width={96} height={96} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Ailton Júnior</h3>
                <p>CTO</p>
              </div>
            </div>
            <div className="card w-60 bg-base-200 shadow-xl">
              <figure className="pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image src="/agents/Tactician.webp" alt="avatar" width={96} height={96} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Lawrence Gabriel</h3>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer p-4 bg-base-200 text-base-content flex items-center justify-between">
        <div>
          <p>© 2025 Impostors.AI</p>
        </div>
        <div>
          <SwitchTheme />
        </div>
      </footer>
    </main>
  );
}
