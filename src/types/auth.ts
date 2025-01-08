export interface LoginRequestType {
  email: string;
  password: string;
}

export interface RegisterRequestType {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  // password_confirmation: string;
  // role?: "student" | "teacher" | "admin";
}

export interface AuthResponseType {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}
