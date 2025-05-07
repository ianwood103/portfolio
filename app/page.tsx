import Image from "next/image";

export default function Home() {
  return (
    <main className="-z-50 flex h-screen flex-col items-center justify-center overflow-hidden bg-amber-300">
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
          <div className="relative z-20 h-[95%] min-h-[750px] w-auto">
            <div className="absolute top-0 left-1/4 aspect-square w-1/2 min-w-[200px]">
              <div className="relative h-full w-full">
                <div className="bg-secondary absolute top-0 left-0 h-full w-full rounded-full opacity-20 blur-md"></div>
                <div className="group absolute top-0 left-1/2 z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#D9D9D9] transition-all duration-100 hover:w-[85px] hover:bg-[#BAD4F5]">
                  <svg
                    viewBox="0 0 455 455"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-primary absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-md fill-black/70 transition-all duration-100 group-hover:opacity-100"
                  >
                    <g>
                      <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z" />
                      <path
                        d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
          M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
          c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
          c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
          c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
          z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="group absolute top-1/2 left-0 z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#D9D9D9] transition-all duration-100 hover:w-[85px] hover:bg-[#BAD4F5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 75.294 75.294"
                    fill="currentColor"
                    className="group-hover:fill-primary absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-md fill-black/70 transition-all duration-100 group-hover:opacity-100"
                  >
                    <path d="M66.097 12.089h-56.9C4.126 12.089 0 16.215 0 21.286v32.722c0 5.071 4.126 9.197 9.197 9.197h56.9c5.071 0 9.197-4.126 9.197-9.197V21.287c0-5.072-4.126-9.198-9.197-9.198zM61.603 18.089L37.647 33.523 13.691 18.089h47.912zM66.097 57.206h-56.9C7.434 57.206 6 55.771 6 54.009V21.457l29.796 19.16c.04.025.083.042.124.065.043.024.087.047.131.069.231.119.469.215.712.278.025.007.05.01.075.016.267.063.537.102.807.102h.006c.27 0 .54-.038.807-.102.025-.006.05-.009.075-.016.243-.063.48-.159.712-.278.044-.022.088-.045.131-.069.041-.023.084-.04.124-.065l29.796-19.16v32.551c0 1.762-1.435 3.197-3.198 3.197z" />
                  </svg>
                </div>
                <div className="group absolute top-1/2 left-full z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#D9D9D9] transition-all duration-100 hover:w-[85px] hover:bg-[#BAD4F5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    className="group-hover:fill-primary absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-md fill-black/70 transition-all duration-100 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M512 0C229.38 0 0 229.38 0 512c0 226.59 147.12 418.5 351.14 486.06 25.66 4.72 35.04-11.14 35.04-24.7 0-12.2-.48-44.55-.75-87.46-142.91 31.06-173.05-68.92-173.05-68.92-23.36-59.31-57.06-75.11-57.06-75.11-46.67-31.9 3.54-31.24 3.54-31.24 51.61 3.63 78.77 53 78.77 53 45.84 78.54 120.31 55.85 149.59 42.75 4.64-33.2 17.91-55.86 32.6-68.7-114.1-13-234.01-57.05-234.01-253.93 0-56.1 20.02-101.87 52.84-137.78-5.28-12.99-22.88-65.36 5.03-136.32 0 0 43.04-13.77 140.96 52.55a488.63 488.63 0 0 1 256.7 0c97.91-66.32 140.88-52.55 140.88-52.55 27.95 70.96 10.36 123.33 5.08 136.32 32.89 35.91 52.75 81.68 52.75 137.78 0 197.38-120.1 240.76-234.44 253.45 18.41 15.87 34.83 47.07 34.83 94.86 0 68.5-.61 123.78-.61 140.61 0 13.65 9.26 29.62 35.2 24.61C876.95 930.44 1024 738.57 1024 512 1024 229.38 794.62 0 512 0Z"
                    />
                  </svg>
                </div>
                <div className="group absolute top-[17%] left-[13%] z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#D9D9D9] transition-all duration-100 hover:w-[85px] hover:bg-[#BAD4F5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="group-hover:fill-primary absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-md fill-black/70 transition-all duration-100 group-hover:opacity-100"
                  >
                    <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
                  </svg>
                </div>
                <div className="group absolute top-[17%] left-[87%] z-20 aspect-square w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#D9D9D9] transition-all duration-100 hover:w-[85px] hover:bg-[#BAD4F5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300.251"
                    fill="currentColor"
                    className="group-hover:fill-primary absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-md fill-black/70 transition-all duration-100 group-hover:opacity-100"
                  >
                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                  </svg>
                </div>
              </div>
            </div>
            <Image
              src="/ian.png"
              alt="Ian Wood"
              width={540}
              height={540}
              className="h-full w-full -rotate-4 transform object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
