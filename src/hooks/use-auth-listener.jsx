import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));

  const { firebaseApp } = useContext(FirebaseContext);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser.providerData));
        setUser((user) => authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser((user) => null);
      }
    });

    return () => listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
}
