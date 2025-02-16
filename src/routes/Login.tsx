import Button from "../components/Button";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Label from "../components/Label";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main className="p-2">
      <Header />
      <h1 className="text-5xl">Login</h1>
      <form>
        <section>
          <Label label={{ text: "Your name", htmlFor: "name" }} />
          <Input
            input={{
              type: "text",
              id: "name",
              onChange: (e) => setName(e),
              placeholder: "Your name",
              name: "name",
            }}
          />
        </section>

        <section>
          <Label label={{ text: "Your email", htmlFor: "email" }} />
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

        <section>
          <Label label={{ text: "Your Password", htmlFor: "password" }} />
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
      </form>
      <Footer />
    </main>
  );
}
