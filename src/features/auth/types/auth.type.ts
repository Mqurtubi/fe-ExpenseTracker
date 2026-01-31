interface FeaturesAuthHero {
  subTitle: string;
  description: string;
}

interface PayloadRegister {
  name: string;
  email: string;
  password_hash: string;
}

interface PayloadLogin {
  email: string;
  password_hash: string;
}

type ApiErrorResponse = {
  status: "error";
  message: string;
  errors?: Record<string, string> | null;
};

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
export type {
  FeaturesAuthHero,
  PayloadRegister,
  PayloadLogin,
  ApiErrorResponse,
  User,
  AuthContextValue,
};
