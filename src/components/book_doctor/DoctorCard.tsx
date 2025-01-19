import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { DoctorType } from "@/types/type2";
import Image from "next/image";
import { Button } from "../ui/button";

const DoctorsCard: React.FC<DoctorType> = ({
  firstName,
  id,
  avater,
  specialization,
}) => {
  return (
    <Card className="p-2 rounded-lg shadow-lg h-fit">
      <CardContent className="p-0 h-fit">
        <CardHeader className="h-44 w-[90%] mx-auto my-4 relative overflow-hidden">
          <Image
            src={avater ? avater : "/user.jpg"}
            alt={firstName}
            fill
            className="w-full h-full"
          />
        </CardHeader>
        <h3 className="text-blue-500 text-lg pb-2 truncate">{firstName}</h3>
        <p className="text-base pb-2">{specialization?.slice(0, 30)}</p>
        <Link href={`/book-doctor/${id}`}>
          <Button className="w-full">View to Book</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default DoctorsCard;
