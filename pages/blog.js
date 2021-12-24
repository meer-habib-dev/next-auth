import { getSession, useSession } from "next-auth/client";

function Blog({ data }) {
  const [session, loading] = useSession();
  return (
    <>
      <h1>This is the blog page</h1>;<h1>Data found: {data}</h1>
    </>
  );
}
export default Blog;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "List of 100 premium content" : "list of free content",
    },
  };
}
