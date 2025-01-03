import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  return (
    <>
      <section className="grid grid-row-2 lg:grid-cols-2 lg:w-[1000px] w-[650px] rounded-2xl overflow-hidden shadow-xl dark:bg-[#000]">
        <aside className="justify-center px-10 py-10 max-sm:px-5 col-span-1">
          <Link href="/">
            <button className='border-none bg-none'>
              <Image src="/Left chevron.svg" alt="" width={30} height={30} />
            </button>
          </Link>
          <h1 className="text-5xl pt-3 pb-4 font-[900]">SignUp</h1>
          <p className='pb-6'>Create your account with Performance Hub</p>
          <form className="flex flex-col space-y-4">
            <InputSection first="First Name" last="Last Name" />
            <InputSecond first="Email" last="Enter your email" inputType="email" name="email"/>
            <InputSection first="Roll Number" last="Phone Number" />
            <InputSecond first="Password" last="Enter your password" inputType="password" name="password"/>
            <aside className='flex gap-2 pb-3 pt-1 justify-end'>
              <p>Don&apos;t have an account?</p>
              <Link href="/login">
                <button className='border-none bg-none text-[#064E3B]'>Login</button>
              </Link>
            </aside>
            <Button className='bg-[#064E3B] rounded-2xl h-10 dark:text-white dark:hover:text-black'>SignUp</Button>
          </form>
        </aside>
        <div className="row-start-1 lg:col-start-2 py-16 px-4 lg:py-20 lg:px-12 bg-gradient-to-br from-slate-800 via-primary_Clr to-primary_Clr col-span-1">
          <h1 className="text-5xl text-white lg:text-6xl max-lg:text-center">Create Your Account</h1>
        </div>
      </section>
    </>
  );
};

export default SignUp;

export type Input = {
  first: string;
  last: string;
};
export type InputFirst = {
  first: string;
  last: string;
  name: string;
  inputType: string;
};
export function InputSecond(props: InputFirst) {
  return (
    <div>
      <label htmlFor="" className="font-[600] text-xl">{props.first}</label>
      <input
        type={props.inputType}
        name={props.name}
        placeholder={props.last}
        className="outline-none border-2 w-full h-10 rounded-2xl pl-4 mt-2"
      />
    </div>
  );
}
export function InputSection(props: Input) {
  return (
    <div className="lg:flex gap-5 block">
      <div className="py-3">
        <label htmlFor="" className="font-[600] text-xl">
          {props.first}
        </label>
        <input
          type="text"
          name="firstName"
          className="outline-none border-2 w-full h-10 rounded-2xl pl-4 mt-2"
        />
      </div>
      <div className="py-3">
        <label htmlFor="" className="font-[600] text-xl">
          {props.last}
        </label>
        <input
          type="text"
          name="lastName"
          className="outline-none border-2 w-full h-10 rounded-2xl pl-4 mt-2"
        />
      </div>
    </div>
  );
}
