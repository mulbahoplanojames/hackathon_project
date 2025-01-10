import UserProfile from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { getToken } from "@/lib/getToken";
import Link from "next/link";

const IsAuthenticated = async () => {
  const token = await getToken();

  return (
    <>
      {token ? (
        <>
          <UserProfile />
        </>
      ) : (
        <>
          <Link href="/login">
            <Button className="dark:bg-transparent bg-white dark:text-white text-primary_Clr hover:bg-white border dark:border-white border-transparent  hover:opacity-80 md:block hidden">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="md:block hidden bg-white text-primary_Clr hover:opacity-85 hover:bg-white">
              Create Account
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default IsAuthenticated;
