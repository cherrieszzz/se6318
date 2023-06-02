import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import logo from "../public/next.svg";

const Nav = () => {
  const { loggedUser, logout, changeThemeFun } = useContext(AuthContext);

  if (loggedUser) {
    console.log(loggedUser.image);
  }

  return (
    <div className="navbar bg-base-100 px-5">
      <div className="flex-1">
        <Link clLinkssName="btn btn-ghost normal-case text-xl" href={"/"}>
          TODO
        </Link>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      <div className="flex-none gap-2">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={changeThemeFun} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {loggedUser && (
                <Image
                  src={`https://se6318.s3.ap-northeast-2.amazonaws.com/5e1eaced8a1363273cfac2fed48fa0ec09fac72e.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaDmFwLW5vcnRoZWFzdC0yIkcwRQIgPIj4A7%2FCBD%2FDZkbYxffimNDE3U6s8j1t%2FVlpzgngvFgCIQCVTffzXMnt%2FaRi6EfdZaCB0QLBTkAdzZC4l23fdokJISrtAgiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA0MjQyNTcxOTkzNyIM6W9ZzgX%2FSX3Qe155KsECQJpSA%2BMm3%2BbZyFdrkcX%2BhHyJGFGR771Iqr4qy9X0mewPcwHRe1p89XvBh5PT%2Fa7OUn%2BWcRaSbyuaDAbYDR0Vc%2BouChJEDyo1WAONhczUqB8LRwnryZlkcxaL%2BKuAK4Cmx%2FQSvvWjWtlKfrpKEShE48wHN1I2SLsXdVgZDAWEqvX2k60s5CHEfiruyRngGdE79PGeRoPsT2ekqIN98h%2FB%2F3Jtt%2BOEKaAOmVigx6QF8sYQpwRlwB2aqxs7EXfoaMpjx3yFiZx5JQpvn5PnawcZh5YxTErsyAQNL9oUY6Dq9gK7Aptk01EafTgIW09zVktm0b7J205fzlLeXoHN2rS2S52DzUzL0YqVIdiXYmQCeLPWoipt2EQw6ZwuEXn7loeXQlU5nW9tf5pfwZA%2FETqc2UqFXMUSft824Zyu5JyBpOubMNDo36MGOrMC4hR5Sdlfc9kiEoR2%2Ft3CpmF0gd%2BqlrLmYIJw9apbdJ3GrZanwsXe5AT5GADCey2vwFGzUZssdgYl1Oof%2BzH0incQGFQ9wZs4DzIqDdtOCP%2FL9NXDsMLu%2BttWGg1YSAaIzyBbY2poe3LI%2Bmq%2FKaqMgzgI9kd0Bk9o2UMv5yO419e5mqfRtJGYee%2FSfBSy80rlYej%2BhCqaEgEbQhF%2Bvy10KO8oGZZyMaA9EaljLUD122y0m2uJ0kMkOTbiwy3nw1XbRsQgW7%2FGEhHjByDLiGZs0LjVtFEN5erTVyst7nGKCjrJuSOFhKxpAwwrMxd%2BQFUoFbrLM0wJ%2BWhRh62iL%2BxuP4oVNwaEw67ETMdpB8IO3by964WGaqSE1CV0jk2cj43scCUlXpa0k%2BcbZJEfiX0sbSFNaw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230601T014931Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAQTYGFDSA3YCLQKBH%2F20230601%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=131c74389f60ce81a45a7e6a5a2ab5496cb4009a2f9e9da5832c5b1504848cf1`}
                  alt="Avatar"
                  width={25}
                  height={25}
                />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="justify-between">
                {loggedUser ? (
                  <Link href={"/profile"}>{loggedUser.username}</Link>
                ) : (
                  <Link href="/login">登录</Link>
                )}
              </p>
            </li>
            {loggedUser && (
              <li>
                <a onClick={logout}>登出</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
