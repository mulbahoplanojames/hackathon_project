import { footerData } from "@/data/footerData";
import { PackageCheck } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="px-4 divide-y  text-white bg-primary_Clr border-t-primary_Clr border-2">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-1 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <PackageCheck />
              </div>
              <span className="self-center text-2xl font-semibold">
                Student P. Hub
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            {footerData.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="uppercase dark:text-gray-900">{item.title}</h3>
                <ul className="space-y-1">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link rel="noopener noreferrer" href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900">Subscribe</h3>
              <p className="">
                Stay updated on our latest features and offerings.
              </p>
              <p className="">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
              <div className="flex justify-center space-x-3"></div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © {new Date().getFullYear()} Student Performance Hub. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
