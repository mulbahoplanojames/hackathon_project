import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <>
      <section className=" flex bg-[#fffff] h-[700px] w-[1000px] rounded-2xl overflow-hidden shadow-xl">
        <aside className="h-full w-full justify-center pl-10 pr-10 pt-8 ">
          <Link href="/">
            <button className='border-none bg-none'>
              <Image src="/Left chevron.svg" alt="" width={30} height={30} />
            </button>
          </Link>
          <h1 className="text-5xl pt-3 pb-4 font-[900]">SignUp</h1>
          <section className='pb-10'>
            <p>Create your account with</p>
            <p>Performance Hub</p>
          </section>
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
        <div className="h-full w-full pt-20 pl-12 bg-gradient-to-br from-slate-800 via-primary_Clr to-primary_Clr">
          <h1 className="text-5xl text-white">Create Your Account</h1>
        </div>
      </section>
    </>
  );
};

export default SignUp;

type Input = {
  first: string;
  last: string;
};
type InputFirst = {
  first: string;
  last: string;
  name: string;
  inputType: string;
};
function InputSecond(props: InputFirst) {
  return (
    <div>
      <label htmlFor="" className="font-[600] text-sm">{props.first}</label>
      <input
        type={props.inputType}
        name={props.name}
        placeholder={props.last}
        className="outline-none border-2 w-full h-10 rounded-2xl pl-4"
      />
    </div>
  );
}
function InputSection(props: Input) {
  return (
    <div className="flex gap-5">
      <div className="">
        <label htmlFor="" className="font-[600] text-sm">
          {props.first}
        </label>
        <input
          type="text"
          name="firstName"
          className="outline-none border-2 w-54 h-10 rounded-2xl pl-4"
        />
      </div>
      <div className="">
        <label htmlFor="" className="font-[600] text-sm">
          {props.last}
        </label>
        <input
          type="text"
          name="firstName"
          className="outline-none border-2 w-54 h-10 rounded-2xl pl-4"
        />
      </div>
    </div>
  );
}
