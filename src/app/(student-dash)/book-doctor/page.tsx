import { doctorData } from "@/data/doctorData";
import { DoctorsCard } from "@/components/doctor_teamCards";
import DashboardHeader from "@/components/dashboard-header";
import BookDoctorHeader from "@/components/book_doctor/BookDoctorHeader";
import WeeklyReportCards from "@/components/book_doctor/WeeklyReportCards";

const BookDoctors = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Book Doctors" />
        <BookDoctorHeader />
        <WeeklyReportCards />

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
      </section>
    </>
  );
};

export default BookDoctors;
