import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex h-full w-full flex-row bg-white">
        <div className="flex h-full w-1/2 flex-col items-center justify-center">
          <div className="flex w-[470px] flex-col">
            <h1 className="text-primary text-[82px] font-extrabold">
              IAN WOOD
            </h1>
            <p className="text-secondary mt-2 text-[32px] leading-[1.2] font-medium">
              I'm a full-stack software engineer specializing in designing
              observable systems in fast-paced environments.
            </p>
            <p className="text-secondary mt-8 text-[32px] leading-[1.2] font-medium">
              I am passionate about building great things with great people. If
              this sounds like you, let's connect.
            </p>
          </div>
        </div>
        <div className="mt-20 flex h-full w-1/2 flex-col justify-end">
          <Image
            src="/ian.png"
            alt="Ian Wood"
            width={540}
            height={540}
            className="ml-12 min-w-[540px] -rotate-4 transform"
          />
        </div>
      </div>
    </main>
  );
}
