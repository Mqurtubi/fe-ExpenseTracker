import { createContext } from "react";
import { AuthContextValue } from "../types/auth.type";

export const AuthContext = createContext<AuthContextValue | null>(null);
