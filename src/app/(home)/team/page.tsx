import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinksType } from "@/types/types";
import { footerLinksData } from "@/data/footerLinksData";
import { teamMembers } from "@/data/footerLinksData";

interface CardProps {
  image: string;
}

const Card = ({ image }: CardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-[20px] overflow-hidden shadow-lg border border-gray-200 dark:border-slate-800 w-[23rem] h-[30rem] m-4 md:w-[20rem] sm:w-[18rem] mx-[2rem]">
      <Image
        src={image}
        alt=""
        width={80}
        height={300}
        className="w-full h-[15rem] object-cover"
      />
      <div className="p-4 flex flex-col items-center mt-6">
        <h2 className="text-xl font-semibold">Full name</h2>
        <p className="text-[#636ae8] mt-2">Professional title</p>
        <p className="text-[1.2rem] text-gray-500 text-center w-[17rem] mt-2">
          Commodo qui nulla ipsum ea cupidatat sit aliquip dolor
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="#">
            <Image src="/logo twitter 2.svg" alt="" width={24} height={24} />
          </a>
          <a href="#">
            <Image src="/logo linkedin 1.svg" alt="" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex justify-center p-4 mt-8">
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <Card key={index} image={member.image} />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <div className="w-full bg-[url('/Rectangle_14.svg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-50 bg-black/30 px-10 py-48">
          <h1 className="text-3xl sm:text-5xl md:text-9xl mb-4 sm:w-[32rem] text-white">
            Our Team
          </h1>
          <p className="text-sm text-white sm:text-lg md:text-xl mb-6 sm:w-[32rem]">
            Generate Lorem Ipsum Placeholder text for use in your graphic, print
            and web layouts, and discover plugins for your favorite writing,
            design and blogging tools. Explore the origins, history and meaning
            of the famous passage.
          </p>
          <Link href="/auth/signup">
            <button className="bg-[#65a30d] text-white py-2 px-4 rounded-lg">
              Create Account
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-[4rem]">Our Team</h1>
        <p className="text-[1.2rem] text-[#9095a0] w-[39rem] mx-auto mt-4">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
      </div>
      <CardList />
      <OurTeamFooter />
    </>
  );
};

export default Team;

export const OurTeamFooter = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 xl:gap-36 p-12">
      <aside className="flex flex-wrap gap-8">
        <h1 className="text-2xl font-[600]">Your Learning Partner</h1>
        <div className="flex flex-wrap gap-12">
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
        <article className="py-4 items-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="border-[#A7F3D0] border-2 bg-[#ECFDF5] outline-none w-72 h-12 px-4 text-[#059669]"
          />
          <button className="text-xl ml-2 mt-2 px-4 py-6">Subscribe</button>
        </article>
        <p>
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
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
