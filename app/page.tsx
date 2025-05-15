import Image from "next/image";
import LinkedInIcon from "./components/LinkedInIcon";
import EmailIcon from "./components/EmailIcon";
import GithubIcon from "./components/GithubIcon";
import InstagramIcon from "./components/InstagramIcon";
import TwitterIcon from "./components/TwitterIcon";

export default function Home() {
  return (
    <main className="-z-50 flex flex-col items-center justify-center overflow-hidden lg:h-screen">
      <div className="flex h-full w-full flex-row flex-wrap justify-center bg-white lg:justify-start">
        <div className="flex h-full w-full flex-col flex-wrap items-center justify-center text-center lg:w-1/2 lg:text-left">
          <div className="flex w-3/4 flex-col">
            <h1 className="text-primary mt-10 text-[40px] font-extrabold lg:m-0 lg:text-[96px]">
              IAN WOOD
            </h1>
            <p className="text-secondary mt-4 text-[20px] leading-[1] font-medium lg:mt-0 lg:text-[36px]">
              I&apos;m a software engineer specializing in designing observable
              &amp; reliable systems in fast-paced environments.
            </p>
            <p className="text-secondary mt-4 text-[20px] leading-[1] font-medium lg:mt-6 lg:text-[36px]">
              I am always looking to build great things with great people. If
              this sounds like you, let&apos;s connect.
            </p>
          </div>
        </div>
        <div className="mt-32 hidden h-full w-2/3 flex-col justify-end lg:visible lg:mt-20 lg:flex lg:w-1/2">
          <div className="relative z-20 h-[95%] min-h-[750px] w-auto">
            <div className="absolute top-0 left-1/4 aspect-square w-1/2 min-w-[200px]">
              <div className="relative h-full w-full">
                <div className="bg-secondary absolute top-0 left-0 h-full w-full rounded-full opacity-15 blur-lg"></div>
                <a
                  href="https://linkedin.com/in/ian-albert-wood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-0 left-1/2 z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
                    <LinkedInIcon />
                  </div>
                </a>
                <a href="mailto:ian.albert.wood@gmail.com">
                  <div className="group absolute top-1/2 left-0 z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
                    <EmailIcon />
                  </div>
                </a>
                <a
                  href="https://github.com/ianwood103"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-1/2 left-full z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
                    <GithubIcon />
                  </div>
                </a>
                <a
                  href="https://instagram.com/ian.woood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-[17%] left-[13%] z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
                    <InstagramIcon />
                  </div>
                </a>
                <a
                  href="https://x.com/itsianwood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group absolute top-[17%] left-[87%] z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
                    <TwitterIcon />
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
            <div className="relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
              <LinkedInIcon />
            </div>
          </a>
          <a
            href="https://github.com/ianwood103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
              <GithubIcon />
            </div>
          </a>
          <a
            href="https://instagram.com/ian.woood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
              <InstagramIcon />
            </div>
          </a>
          <a
            href="https://x.com/itsianwood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
              <TwitterIcon />
            </div>
          </a>
          <a href="mailto:ian.albert.wood@gmail.com">
            <div className="relative z-20 aspect-square w-[80px] cursor-pointer rounded-full bg-[#E5E5E5]/50 opacity-90 shadow-xs transition-all duration-100 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:backdrop-blur-sm hover:w-[85px] hover:bg-[#BAD4F5]">
              <EmailIcon />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
