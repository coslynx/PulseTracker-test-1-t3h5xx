import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { useGoal } from "@utils/zustand";
import { Session } from "@types/types";

const Layout: React.FC<{ children: React.ReactNode; session: Session }> = ({
  children,
  session,
}) => {
  const { getGoals } = useGoal();
  const [isLoading, setIsLoading] = useState(true);
  const [isGoalsLoaded, setIsGoalsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getGoals();
        setIsGoalsLoaded(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (session) {
      fetchData();
    }
  }, [session]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <SessionProvider session={session}>
      <main className="bg-gray-100 min-h-screen">
        <Header session={session} />
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </SessionProvider>
  );
};

export default Layout;