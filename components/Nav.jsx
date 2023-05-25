import Image from "next/image";
import nextImage from "../public/next.svg";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";

const Nav = () => {
  const {loggedUser,logout} = useContext(AuthContext);
 
  return (
    <div className="navbar bg-base-100 px-5">
      <div className="flex-1">
        <Link clLinkssName="btn btn-ghost normal-case text-xl" href={"/"}>
          TODO
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src='https://i.postimg.cc/NM8mj29R/QQ-20230522092653.jpg' alt="avatar" width={25} height={25} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="justify-between">
                {loggedUser ? <Link href={'/profile'}>{loggedUser.username}</Link>  : <Link href="/login">登录</Link>}
              </p>
            </li>
            <li>
              <a onClick={logout}>登出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
