import { ChevronRight, House } from "lucide-react";

const DashboardHeader = ({ text }: { text: string }) => {
  return (
    <>
      <section className="flex items-center justify-between mb-8">
        <h1 className="md:text-2xl text-xl font-bold">{text}</h1>

        <div className="bg-neutral-100 md:py-3 md:px-5 flex items-center justify-center gap-2 px-3 py-2 rounded-full shadow-lg">
          <House className="text-gray-400" />

          <a
            href="/dashboard"
            className="hover:text-blue-500 text-base text-gray-400"
          >
            Home
          </a>
          <ChevronRight className="text-gray-400" />
          <span className="text-base text-black">{text}</span>
        </div>
      </section>
    </>
  );
};

export default DashboardHeader;
