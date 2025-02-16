import Button from "../components/Button";
import { logout } from "../backend/auth/logout";
import { useContext } from "react";
import { UserContext } from "../middleware/UserContext";

export default function Header() {
  const {account} = useContext(UserContext);

  return (
    <header className="flex justify-end">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {account.$id ? (
            ""
          ) : (
            <li>
              <a href="/signup">Signup</a>
            </li>
          )}
          {account.$id ? (
            <li>
              <a href="/books">Books</a>
            </li>
          ) : (
            ""
          )}
          {account.$id ? (
            <li>
              <Button button={{ onClick: () => logout(), text: "Logout" }} />
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
}
