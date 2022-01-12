import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebaseApp } = useContext(FirebaseContext);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser.providerData));
        setUser(authUser);
        console.log("there is user");
      } else {
        console.log("there is no user");
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  });

  return { user };
}
