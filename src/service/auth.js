import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { BROWSE } from "../lib/routes";

export const signinAuth = async (form, firebaseApp, history, resetForm, setError) => {
  const auth = getAuth(firebaseApp);

  if (!form.email || !form.password) return;

  await signInWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
      //? redirect to the browse page
      history.push(BROWSE);
    })
    .catch((err) => {
      console.log(err.message);
      resetForm();
      if (err.message.includes("user-not-found" || "wrong" || "wrong-password")) {
        setError((error) => "Email or password incorrect");
      } else {
        setError((error) => "An error occurred, please try again");
      }
    });
};

export const signupAuth = async (form, firebaseApp, history, resetForm, setError) => {
  const auth = getAuth(firebaseApp);

  if (!form.email || !form.password || !form.fullName) return;

  await createUserWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
      //? redirect to the browse page
      updateProfile(auth.currentUser, {
        displayName: form.fullName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      }).then(() => {
        history.push(BROWSE);
      });
    })
    .catch((err) => {
      resetForm();
      if (err.message.includes("email-already-in-use")) {
        setError((error) => `An account with ${form.email} already exists`);
      } else {
        setError((error) => "An error occurred, please try again");
      }
    });
};
