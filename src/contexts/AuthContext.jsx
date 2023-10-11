import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  console.log(
    "🚀 ~ file: AuthContext.jsx:14 ~ AuthContextProvider ~ authUser:",
    authUser
  );
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const loginAdmin = async (credential) => {
    const res = await axios.post("/auth/login/admin", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    console.log(
      "🚀 ~ file: AuthContext.jsx:36 ~ AuthContextProvider ~ authUser:",
      authUser
    );
  };

  const registerAdmin = async (registerInputObject) => {
    const res = await axios.post("/auth/register/admin", registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };
  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const updateProfile = async (data) => {
    const res = await axios.patch("/user", data);
    setAuthUser({ ...authUser, ...res.data });
  };
  return (
    <AuthContext.Provider
      value={{
        loginAdmin,
        authUser,
        initialLoading,
        registerAdmin,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
