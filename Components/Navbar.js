import Link from "next/link";
// import { signIn, signOut } from "next-auth/client";
import { useSession, signIn, signOut } from "next-auth/client";
function Navbar({ children }) {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <>
      <nav className="header">
        <h1 className="logo">
          <a href="#">NextAuth</a>
        </h1>
        <ul
          className={`main-nav ${!session && loading ? "loading" : "loaded"}`}
        >
          <li>
            <Link href="/">
              <a href="">Home</a>
            </Link>
          </li>
          {session && (
            <li>
              <Link href="/dashboard">
                <a href="">Dashboard</a>
              </Link>
            </li>
          )}
          <li>
            <Link href="/blog">
              <a href="">Blogs</a>
            </Link>
          </li>
          {!session && !loading && (
            <li>
              <Link href="/api/auth/signin">
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  Sign In
                </a>
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
