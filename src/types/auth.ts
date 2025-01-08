export interface LoginRequestType {
  email: string;
  password: string;
}

export interface RegisterRequestType {
  firstName: string;
  lastName: string;
  rollNumber: string;
  email: string;
  phone: string;
  password: string;
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
