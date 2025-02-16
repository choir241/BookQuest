import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Book from "./routes/Books";
import { UserContext } from "../src/middleware/UserContext";
import { getAccount, IAccount } from "./backend/auth/getAccount";
import { useState, useEffect, Suspense } from "react";

export default function App() {
  const [account, setAccount] = useState<IAccount>({
    name: "",
    $id: "",
    email: "",
  });

  useEffect(() => {
    getAccount({ setAccount });
  }, []);

  return (
    <Suspense>
      <UserContext.Provider value={{ account }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/books" element={<Book />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Suspense>
  );
}
