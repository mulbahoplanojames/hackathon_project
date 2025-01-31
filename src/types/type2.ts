export type DoctorType = {
  id?: number;
  firstName: string;
  lastName: string;
  specialization: string;
  description?: string;
  avater: string;
  gender?: string;
  phone?: string;
  email?: string;
};

// export type ReportCardsType = {
//   id: number;
//   description: string;
//   booking: number;
//   icon?: string;
// };

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
  rollNumber?: string;
  avater?: string;
  gender?: string;
};
