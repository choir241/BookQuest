import Button from "../components/Button";
import { logout } from "../backend/auth/logout";
import { useContext, useState } from "react";
import { UserContext } from "../middleware/UserContext";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function Header() {
  const { account } = useContext(UserContext);

  const [display, setDisplay] = useState<boolean>(false);

  return (
    <header className="flex justify-end mb-6">
      {display ? (
        <Button
          button={{
            text: <HiOutlineDotsHorizontal />,
            onClick: () => setDisplay(false),
          }}
        />
      ) : (
        <Button
          button={{
            text: <HiOutlineDotsHorizontal />,
            onClick: () => setDisplay(true),
          }}
        />
      )}

      {display ? (
        <nav className="absolute mt-10 bg-[#642E3B] text-[#F1E4EE] p-10 rounded-[10px]">
          <ul>
            <li className="mb-4">
              <a className="text-xl" href="/">
                Home
              </a>
            </li>
            {account.$id ? (
              ""
            ) : (
              <li className="mb-4">
                <a className="text-xl" href="/login">
                  Login
                </a>
              </li>
            )}
            {account.$id ? (
              ""
            ) : (
              <li className="mb-4">
                <a className="text-xl" href="/signup">
                  Signup
                </a>
              </li>
            )}
            {account.$id ? (
              <li>
                <a className="text-xl" href="/books">
                  Books
                </a>
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
      ) : (
        ""
      )}
    </header>
  );
}
