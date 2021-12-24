import { getSession, signIn } from "next-auth/client";
import { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  return (
    <>
      <h1>Welcome to Dashboard</h1>
    </>
  );
}
export default Dashboard;
