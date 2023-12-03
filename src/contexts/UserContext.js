import { useState } from "react";
import { createContext } from "react";
import { firebase } from "../firebase/config";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();

            setUser(user);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });

    return user;
  };

  const signIn = (userData) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((response) => {
        const uid = response.user.uid;

        const data = {
          id: uid,
          email: userData.email,
          fullName: userData.fullName,
        };

        const usersRef = firebase.firestore().collection("users");

        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            setUser(data);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });

    return user;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
}
