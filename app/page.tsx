import Image from "next/image";
import LinkedInIcon from "./components/LinkedInIcon";
import EmailIcon from "./components/EmailIcon";
import GithubIcon from "./components/GithubIcon";
import InstagramIcon from "./components/InstagramIcon";
import TwitterIcon from "./components/TwitterIcon";

export default function Home() {
  return (
    <main className="-z-50 flex h-screen flex-col items-center justify-center overflow-hidden bg-amber-300">
      <div className="flex h-full w-full flex-row bg-white">
        <div className="flex h-full w-1/2 flex-col items-center justify-center">
          <div className="flex w-3/4 flex-col">
            <h1 className="text-primary text-[96px] font-extrabold">
              IAN WOOD
            </h1>
            <p className="text-secondary text-[36px] leading-[1] font-medium">
              I&apos;m a software engineer specializing in designing observable
              &amp; reliable systems in fast-paced environments.
            </p>
            <p className="text-secondary mt-6 text-[36px] leading-[1] font-medium">
              I am always looking to build great things with great people. If
              this sounds like you, let&apos;s connect.
            </p>
          </div>
        </div>
        <div className="mt-20 flex h-full w-1/2 flex-col justify-end">
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
      </div>
    </main>
  );
}
