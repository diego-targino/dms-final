import "react-native-gesture-handler";
import { decode, encode } from "base-64";
import { UserProvider } from "./src/contexts/UserContext";
import Router from "./src/Router/Router";
import { BookProvider } from "./src/contexts/BookContext";

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  return (
    <UserProvider>
      <BookProvider>
        <Router />
      </BookProvider>
    </UserProvider>
  );
}
