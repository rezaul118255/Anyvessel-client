import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [reCall, setReCall] = useState(false);
  console.log(user)

  useEffect(() => {
    setIsUserLoading(true);
    const userData = JSON.parse(localStorage.getItem("userInfo"));

    // console.log("userData ", userData);
    if (userData) {
      const userDetails = userData?.userData;
      const token = userData?.accessToken;

      setUser(userDetails);
      setAccessToken(token);
    }
    setIsUserLoading(false);
  }, [reCall]);

  const logOut = () => {
    setReCall(!reCall);
    localStorage.clear("userInfo");
    window.location.reload();
  };

  return {
    isUserLoading,
    user,
    setUser,
    reCall,
    setReCall,
    accessToken,
    logOut,
  };
}
