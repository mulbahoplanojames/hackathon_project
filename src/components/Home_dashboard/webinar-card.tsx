import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

const WebinarCard = () => {
  return (
    <>
      <div className="w-full   col-span-2 rounded-md">
        <Card className="border-0 dark:border dark:border-primary_Clr">
          <CardContent className="pt-4">
            <CardHeader className="h-[200px] w-full  rounded-md overflow-hidden relative">
              <Image
                src="/webinar.svg"
                alt="Webinar Image"
                fill
                className=" object-cover"
              />
            </CardHeader>
            <CardDescription>
              <h1 className="text-2xl font-bold py-2">Upcoming Webinar</h1>
              <p className="text-sm">
                Next Generation Frontend Architecture Using Layout Engine And
                React Native Web
              </p>
            </CardDescription>
            <div className="flex justify-between items-center flex-wrap gap-3 mt-4">
              <div>
                <div className="flex gap-5">
                  <div className="bg-slate-200 rounded-sm px-2 py-1 flex items-center gap-2">
                    <Calendar className="size-5" />
                    <p className="text-base">Nov 7</p>
                  </div>
                  <div className="bg-primary_Clr text-white rounded-sm px-2 py-1 flex items-center gap-2">
                    <Clock className="size-5" />
                    <p className="text-base">30 mins</p>
                  </div>
                </div>
              </div>
              <Button className="md:w-1/2 w-full bg-primary_Clr hover:bg-primary_Clr hover:opacity-90 text-white">
                Attend Webinar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default WebinarCard;
