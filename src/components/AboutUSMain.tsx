import { BasicDetailsData } from "@/data/aboutUsData";
import { basicDestailsType } from "@/types/types";

const AboutUsMain = () => {
  return (
    <div className="grid justify-items-center px-5 py-10 md:px-10">
      <section>
        <h1 className="text-5xl pb-4 md:text-7xl">About Us</h1>
        <p className="text-xl opacity-60 pb-8 md:text-2xl lg:w-[900px]">
          Aliqua consectetur laborum anim anim quis elit sit cupidatat ipsum
          cupidatat nostrud adipisicing.
        </p>
        <aside className="flex max-lg:flex-wrap-reverse justify-center gap-6">
          <div className="h-full">
            {BasicDetailsData.map((data, index) => (
              <BasicDetails
                key={index}
                heading={data.heading}
                details={data.details}
              />
            ))}
          </div>
          <section className="bg-[url('https://res.cloudinary.com/dx2ub50ms/image/upload/v1737657954')] bg-center bg-cover bg-no-repeat rounded w-full h-[400px] sm:h-[550px]"/>
        </aside>
      </section>
    </div>
  );
};

const BasicDetails = (props: basicDestailsType) => {
  return (
    <div className="pb-8">
      <h1 className="text-2xl font-[600] opacity-70 md:text-4xl">
        {props.heading}
      </h1>
      <p className="text-xl opacity-60 md:text-2xl">{props.details}</p>
    </div>
  );
};

export default AboutUsMain;
