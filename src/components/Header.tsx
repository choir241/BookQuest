import Button from "../components/Button";
import { logout } from "../backend/auth/logout";
import { useContext, useState } from "react";
import { UserContext } from "../middleware/UserContext";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

export default function Header() {
  const { account } = useContext(UserContext);

  const [display, setDisplay] = useState<boolean>(false);

  return (
    <header className="relative flex justify-end items-center mb-6">
      
      {account.$id || sessionStorage.getItem("id") ? (
                <a className="text-xl plus-btn mr-6" href="/addBook">
                  <FaPlus/>
                </a>
            ) : (
              ""
      )}

      {display ? (
        <Button
          button={{
            text: <HiOutlineDotsHorizontal className="text-xl"/>,
            onClick: () => setDisplay(false),
          }}
        />
      ) : (
        <Button
          button={{
            text: <HiOutlineDotsHorizontal className="text-xl"/>,
            onClick: () => setDisplay(true),
          }}
        />
      )}

      {display ? (
        <nav className="top-15 absolute bg-[#642E3B] text-[#F1E4EE] p-10 rounded-[10px]">
          <ul>
            <li className="mb-4">
              <a className="text-xl" href="/">
                Home
              </a>
            </li>
            {account.$id || sessionStorage.getItem("id") ? (
              ""
            ) : (
              <li className="mb-4">
                <a className="text-xl" href="/login">
                  Login
                </a>
              </li>
            )}
            {account.$id || sessionStorage.getItem("id") ? (
              ""
            ) : (
              <li className="mb-4">
                <a className="text-xl" href="/signup">
                  Signup
                </a>
              </li>
            )}
            {account.$id || sessionStorage.getItem("id") ? (
              <li className="mb-4">
                <a className="text-xl" href="/books">
                  Books
                </a>
              </li>
            ) : (
              ""
            )}

            {account.$id || sessionStorage.getItem("id") ? (
              <li className="mb-8">
                <a className="text-xl" href="/profile">
                  Profile
                </a>
              </li>
            ) : (
              ""
            )}

            {account.$id || sessionStorage.getItem("id") ? (
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
