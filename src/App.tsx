import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Book from "./routes/Books";
import { UserContext } from "../src/middleware/UserContext";
import { getAccount, IAccount } from "./backend/auth/getAccount";
import { useState, useMemo, Suspense } from "react";
import PrivateRoutes from "./middleware/PrivateRoutes";
import PublicRoutes from "./middleware/PublicRoutes";

export default function App() {
  const [account, setAccount] = useState<IAccount>({
    name: "",
    $id: "",
    email: "",
  });

  useMemo(() => {
    getAccount({ setAccount });
  }, []);

  return (
    <Suspense>
      <UserContext.Provider value={{ account }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/books" element={<Book />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Suspense>
  );
}
