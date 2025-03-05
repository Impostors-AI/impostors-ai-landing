"use client";

import DroppingEmojis from "@/components/DroppingEmojis";
import SwitchTheme from "@/components/SwitchTheme";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-success text-base-content min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="sticky text-center top-0 z-50 bg-success py-2 px-5 flex justify-center items-center shadow-md text-black">
        <span>
          We’re thrilled to share that Impostors AI won the{" "}
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
      <section className="hero min-h-screen relative bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <DroppingEmojis count={15} />
        </div>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col items-center relative">
          <h1 className="flex flex-col md:block text-5xl sm:text-7xl lg:text-9xl font-bold drop-shadow-lg">
            🎭
            <span>Impostors AI</span>
          </h1>
          <p className="text-xl mt-24 sm:mt-44">AI-Powered Social Deduction Game</p>
          <div className="mt-2 flex space-x-4">
            <a
              href="https://app-impostorsai.vercel.app"
              className="btn btn-success hover:animate-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Game
            </a>
            <a
              href="https://docs.fileverse.io/0x3a7dd16634a22E2A085a1b7792020cD16919239b/0#key=cDht84Ewngx2HnMazgkArjGOFhAuO25vlUNf-3_AIwryZEcVoo4TzK-l6vmx7SBL"
              className="btn btn-primary hover:animate-pulse"
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
              title="Impostors AI Demo"
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
          <p>© 2025 Impostors AI</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://x.com/impostorsai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23.953 4.569a10 10 0 0 1-2.825.775 4.959 4.959 0 0 0 2.163-2.723 10.032 10.032 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.099a4.904 4.904 0 0 1-2.229-.616v.06a4.92 4.92 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.937 4.937 0 0 0 4.604 3.417A9.868 9.868 0 0 1 .96 19.54a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.006-.423-.015-.633A9.935 9.935 0 0 0 24 4.59z" />
            </svg>
          </a>
          <a
            href="https://github.com/Impostors-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-6 h-6"
              fill="currentColor"
            >
              <path
                d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
              />
            </svg>
          </a>
        </div>
        <div>
          <SwitchTheme />
        </div>
      </footer>
    </main>
  );
}
