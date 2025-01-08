import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { basicDestailsType, footerLinksType, TrustCompanysType } from "@/types/types";
import {
  BasicDetailsData,
  footerLinksData,
  TrustCompanysData,
} from "@/data/aboutUsData";

const AboutUsContain = () => {
  return (
    <>
      <Header />
      <AboutUsMain />
      <NewsLetter />
      <TrustCompanys />
      <AboutUsFooter />
    </>
  );
};

export default AboutUsContain;

export function Header() {
  return (
    <div className="bg-[url('/about-hero.svg')] bg-center bg-cover">
      <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-5 py-28 md:px-10 md:py-48">
        <h1 className=" text-white text-7xl md:text-9xl">About Us</h1>
        <p className="text-white text-xl py-5 md:w-[450px]">
          Generate Lorem Ipsum placeholder text for use in
          your graphic, print and web layouts, and discover
          plugins for your favorite writing, design and
          blogging tools. Explore the origins, history and
          meaning of the famous passage.
        </p>
        <Link href="/signup">
          <Button className="bg-[#064E3B] text-white text-xl mt-3 rounded-xl py-8 px-5">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
}

const AboutUsMain = () => {
  return (
    <div className="flex justify-end px-5 py-10">
      <section>
        <h1 className="text-5xl pb-4 md:text-7xl">About Us</h1>
        <p className="text-[1rem] opacity-60 pb-8 md:text-2xl md:w-[750px]">
          Aliqua consectetur laborum anim anim quis elit sit cupidatat
          ipsum cupidatat nostrud adipisicing.
        </p>
        <aside className="flex max-lg:flex-wrap-reverse justify-center gap-6">
          <div className="max-lg:w-full h-full">
            {BasicDetailsData.map((data, index) => (
              <BasicDetails
                key={index}
                heading={data.heading}
                details={data.details}
              />
            ))}
          </div>
          <Image
            src="/webinare1.svg"
            alt=""
            width={0}
            height={0}
            className="w-[400px] max-lg:w-full max-w-[750px]"
          />
        </aside>
      </section>
    </div>
  );
};

const BasicDetails = (props: basicDestailsType) => {
  return (
    <div className="pb-8">
      <h1 className="text-2xl font-[600] opacity-70 md:text-3xl">{props.heading}</h1>
      <p className="opacity-60 md:text-xl">{props.details}</p>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div className="grid grid-cols-5 py-10 my-8 w-full relative">
      <div className='col-span-1'/>
      <section className="flex col-span-4 bg-[#064E3B] rounded-l-3xl py-14 px-8 max-lg:col-span-5">
        <aside className=''>
          <h1 className='text-4xl'>Our NewsLetter</h1>
          <h2 className='text-base py-4'>Subscribe to our NewsLetter</h2>
          <div className='gap-4'>
            <input
              type="email"
              name="email"
              id=""
              className="outline-none h-12 w-64 mb-2 mr-4 rounded-2xl"
            />
            <Button>Subscribe</Button>
          </div>
        </aside>
        <Image
          src="/check.svg"
          alt=""
          width={300}
          height={400}
          className="absolute top-0 right-[5%] max-md:hidden"
        />
      </section>
    </div>
  );
};

const TrustCompanys = () => {
  return (
    <div className="bg-[#064E3B] px-5 py-16 mb-8 grid justify-items-center">
      <h1 className="text-2xl text-center pb-4 md:text-3xl">Trusted by Leading Eductional Institutions</h1>
      <section className='flex gap-6 flex-wrap'>
        {
        TrustCompanysData.map((trust, index) => (
          <ImagesTrustCompany key={index} ImageUrl={trust.ImageUrl} />
        ))
        }
      </section>
    </div>
  );
};

const ImagesTrustCompany = (props: TrustCompanysType) => {
  return <Image src={props.ImageUrl} alt="" width={100} height={0} className='w-[100px] sm:w-[120px] md:w-[180px]'/>;
};

export const AboutUsFooter = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 px-5 py-12 lg:px-32 ">
      <aside className="flex max-lg:flex-wrap gap-8">
        <h1 className="text-2xl font-[600]">Your Learning Partner</h1>
        <div className="flex max-md:flex-wrap gap-12">
          {footerLinksData.map((footer, id) => (
            <FooterLinks
              key={id}
              heading={footer.heading}
              link1={footer.link1}
              link2={footer.link2}
              link3={footer.link3}
              link4={footer.link4}
              locateLink1={footer.locateLink1}
              locateLink2={footer.locateLink2}
              locateLink3={footer.locateLink3}
              locateLink4={footer.locateLink4}
            />
          ))}
        </div>
      </aside>
      <section>
        <h1 className="text-2xl font-[600] pb-4">Subscribe</h1>
        <h2 className="text-base">
          Stay updated to our latest features and offerings
        </h2>
        <article className="py-4 block items-center ">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="border-[#A7F3D0] border-2 bg-[#ECFDF5] outline-none w-72 h-12 px-4 mr-2 text-[#059669]"
          />
          <Button className="text-xl  max-sm:mt-2 px-4 py-6">Subscribe</Button>
        </article>
        <p>
          By subscribing, you agree to our Private Policy and concentto receive updates
        </p>
      </section>
    </div>
  );
};

const FooterLinks = (props: footerLinksType) => {
  return (
    <div>
      <h1 className="text-2xl font-[600] pb-4">{props.heading}</h1>
      <ul>
        <Link href={props.locateLink1}>
          <li className="text-xl pb-2">{props.link1}</li>
        </Link>
        <Link href={props.locateLink2}>
          <li className="text-xl pb-2">{props.link2}</li>
        </Link>
        <Link href={props.locateLink3}>
          <li className="text-xl pb-2">{props.link3}</li>
        </Link>
        <Link href={props.locateLink4}>
          <li className="text-xl pb-2">{props.link4}</li>
        </Link>
      </ul>
    </div>
  );
};
