
import Image from "next/image";
import { ReportsData, doctorData } from "@/data/doctorData";
import { DoctorsCard, ReportsCards } from "@/components/doctor_teamCards";

const BookDoctors = () => {
  return (
    <>
      <h1 className="text-[25px] font-semibold py-6 px-4">Book Doctor</h1>

      <div className="px-8">
        <aside className="lg:relative pt-8">
          <section className="bg-[#f3f4f6] dark:bg-sidebar pt-8 lg:py-[4.5rem] rounded-lg max-lg:justify-items-center px-12">
            <div className="text-center lg:text-left">
              <h1 className="text-[25px] md:text-[55px] font-semibold">
                Welcome back <br />
                <span className="text-[#064e3b]">Student</span>
              </h1>
              <p className="text-[#000] text-[1rem] md:text-[1.5rem] py-2 w-full md:w-[30rem] dark:text-white">
                Book a doctor to check your health <br />
                status, and always stay safe and <br />
                healthy in your studies.
              </p>
            </div>
            <Image
              src="/female doctor at desk.svg"
              alt="doctor"
              width={0}
              height={0}
              className="w-[250px] xl:w-[350px] lg:w-[300px] lg:absolute top-0 right-[5%] "
            />
          </section>
        </aside>

        <div className="mt-8">
          <h1 className="text-[35px] font-semibold py-4">Weekly Reports</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[2.5rem]">
            {ReportsData.map((card, index) => (
              <ReportsCards
                key={index}
                description={card.description}
                booking={card.booking}
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-[35px] font-semibold py-4">Doctors</h1>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
            {doctorData.map((doctor, index) => (
              <DoctorsCard
                key={index}
                title={doctor.titile}
                description={doctor.description}
                imageSrc={doctor.Image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDoctors;
