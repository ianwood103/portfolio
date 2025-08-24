import Image from "next/image";
import LinkedInIcon from "./components/LinkedInIcon";
import EmailIcon from "./components/EmailIcon";
import GithubIcon from "./components/GithubIcon";
import InstagramIcon from "./components/InstagramIcon";
import ResumeIcon from "./components/ResumeIcon";

export default function Home() {
  return (
    <main className="-z-50 flex flex-col items-center justify-center overflow-hidden lg:h-screen">
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      />
      <div className="flex h-full w-full flex-row flex-wrap justify-center bg-white/0 lg:justify-start">
        <div className="flex h-full w-full flex-col flex-wrap items-center justify-center text-center lg:w-1/2 lg:text-left">
          <div className="flex w-3/4 flex-col">
            <h1 className="text-primary mt-10 text-[40px] font-extrabold lg:m-0 lg:text-[100px]">
              IAN WOOD
            </h1>
            <p className="text-secondary mt-4 text-[20px] leading-[1.18] font-medium lg:mt-0 lg:text-[36px]">
              I&apos;m a software engineer specializing in designing observable
              &amp; reliable systems in fast-paced environments.
            </p>
            <p className="text-secondary mt-4 text-[20px] leading-[1.18] font-medium lg:mt-6 lg:text-[36px]">
              I am always looking to build great things with great people. If
              this sounds like you, let&apos;s connect.
            </p>
          </div>
        </div>
        <div className="mt-32 hidden h-full w-2/3 flex-col justify-end lg:visible lg:mt-20 lg:flex lg:w-1/2">
          <div className="relative z-20 h-[95%] min-h-[750px] w-auto">
            <div className="absolute top-0 left-1/4 aspect-square w-1/2 min-w-[200px]">
              <div className="relative h-full w-full">
                <div className="bg-white absolute top-0 left-0 h-full w-full rounded-full opacity-65 blur-xl"></div>
                <a
                  href="https://linkedin.com/in/ian-albert-wood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-0 left-1/2 z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
                    <LinkedInIcon />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none transform group-hover:translate-y-0 translate-y-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-black/80">
                      LinkedIn
                    </div>
                  </div>
                </a>
                <a href="mailto:ian.albert.wood@gmail.com">
                  <div className="group absolute top-1/2 left-0 z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
                    <EmailIcon />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none transform group-hover:translate-y-0 translate-y-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-black/80">
                      Email
                    </div>
                  </div>
                </a>
                <a
                  href="/resume.pdf"
                  download="Ian_Wood_Resume.pdf"
                >
                  <div className="group absolute top-1/2 left-full z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
                    <ResumeIcon />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none transform group-hover:translate-y-0 translate-y-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-black/80">
                      Resume
                    </div>
                  </div>
                </a>
                <a
                  href="https://instagram.com/ian.woood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-[17%] left-[13%] z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
                    <InstagramIcon />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none transform group-hover:translate-y-0 translate-y-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-black/80">
                      Instagram
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/ianwood103"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-[17%] left-[87%] z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
                    <GithubIcon />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none transform group-hover:translate-y-0 translate-y-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-black/80">
                      GitHub
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <Image
              src="/ian.png"
              alt="Ian Wood"
              width={540}
              height={540}
              className="h-full w-full -rotate-4 transform object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="relative mt-16 flex w-full flex-row flex-wrap justify-center gap-8 px-8 lg:hidden">
          <a
            href="https://linkedin.com/in/ian-albert-wood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
              <LinkedInIcon />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                LinkedIn
              </div>
            </div>
          </a>
          <a
            href="/resume.pdf"
            download="Ian_Wood_Resume.pdf"
          >
            <div className="group relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
              <ResumeIcon />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Resume
              </div>
            </div>
          </a>
          <a
            href="https://instagram.com/ian.woood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
              <InstagramIcon />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Instagram
              </div>
            </div>
          </a>
          <a
            href="https://github.com/ianwood103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
              <GithubIcon />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                GitHub
              </div>
            </div>
          </a>
          <a href="mailto:ian.albert.wood@gmail.com">
            <div className="group relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-white/80 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:backdrop-blur-sm hover:w-[81px] hover:bg-[#D2E2FF]">
              <EmailIcon />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-black/80 text-white text-sm px-2 py-1 rounded whitespace-nowrap pointer-events-none transform group-hover:translate-y-0 translate-y-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-l-4 after:border-r-4 after:border-t-4 after:border-l-transparent after:border-r-transparent after:border-t-black/80">
                Email
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
