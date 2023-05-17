import { User } from "../../services/user/type";

export interface AuthContextValue {
  user: User | null;
  loginUser: () => void;
  logoutUser: () => void;
}
