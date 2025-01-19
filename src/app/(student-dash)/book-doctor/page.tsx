import DashboardHeader from "@/components/dashboard-header";
import BookDoctorHeader from "@/components/book_doctor/BookDoctorHeader";
import WeeklyReportCards from "@/components/book_doctor/WeeklyReportCards";
import DoctorList from "@/components/book_doctor/DoctorList";

const BookDoctors = () => {
  return (
    <>
      <section className="p-4 pt-3">
        <DashboardHeader text="Book Doctors" />
        <BookDoctorHeader />
        <WeeklyReportCards />
        <DoctorList />
      </section>
    </>
  );
};

export default BookDoctors;
