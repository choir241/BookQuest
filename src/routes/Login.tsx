import Button from "../components/Button";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Label from "../components/Label";
import { login } from "../backend/auth/login";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main className="p-2">
      <Header />
      <h1 className="mb-6 text-5xl">Login</h1>
      <section className="w-full justify-center flex">
        <form className="w-80 py-10 flex flex-col items-center bg-[#F1B6CA] shadow-[10px_10px_10px_#C9ABC5] rounded-[10px]">

        <section className="mb-4 flex flex-col items-start">
          <Label label={{ className: "mb-2", text: "Your email", htmlFor: "email" }} />
          <Input
            input={{
              type: "email",
              id: "email",
              onChange: (e) => setEmail(e),
              placeholder: "Your email",
              name: "email",
            }}
          />
        </section>

        <section className="mb-8 flex flex-col items-start">
          <Label label={{ className: "mb-2", text: "Your Password", htmlFor: "password" }} />
          <Input
            input={{
              type: "password",
              id: "password",
              onChange: (e) => setPassword(e),
              placeholder: "Your password",
              name: "password",
            }}
          />
        </section>

        <Button button={{text: "Login", onClick: ()=>login({email, password})}}/>
        <p className="mt-2">Don't have an account? <a href = "/signup">Sign up here!</a></p>
        </form>
      </section>
      <Footer />
    </main>
  );
}
