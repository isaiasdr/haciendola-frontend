import { User } from "./user.interface";

export interface VerifyTokenResponse {
  user:  User;
  token: string;
}
