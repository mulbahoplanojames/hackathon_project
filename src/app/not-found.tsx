import Link from "next/link";

const TopLeftSvg = () => {
  return (
    <svg
      className="absolute bottom-0 left-0 text-[#FFFAEA] dark:text-slate-800 -z-[1]"
      width="850"
      height="621"
      viewBox="0 0 850 621"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M557.671 394.507C642.476 480.048 827.513 471.973 850 621H-4C-4 484.826 -2.00116 182.951 -2.00116 58.5887C255.348 -80.3641 481.216 58.5887 481.216 158.287C481.216 270.839 481.216 317.388 557.671 394.507Z"
        fill="currentColor"
      />
    </svg>
  );
};

const CharacterSvg = () => {
  return (
    <img
      className="absolute bottom-0 left-0 hidden lg:block"
      src="https://cdn.easyfrontend.com/pictures/httpcodes/six-character.svg"
      alt=""
    />
  );
};

export default function NotFound() {
  return (
    <>
      <section className="ezy__httpcodes6 light py-32 md:py-52 bg-white dark:bg-[#0b1727] text-[#04004d] dark:text-white relative overflow-hidden z-[1]">
        <TopLeftSvg />
        <CharacterSvg />

        <div className="container px-4 mx-auto">
          <div className="flex justify-end items-center">
            <div className="lg:max-w-4xl text-center lg:text-start">
              <h2 className="text-8xl font-bold leading-none md:text-[160px] mb-6">
                404
              </h2>
              <p className="text-3xl opacity-80 md:text-5xl">
                Page not Available!
              </p>
              <Link href="/">Return Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
