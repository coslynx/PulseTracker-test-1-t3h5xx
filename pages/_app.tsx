import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { useGoal } from "@utils/zustand";
import { Session } from "@types/types";
import Layout from "@components/Layout";
import { SessionProviderProps } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function MyApp({ Component, pageProps }: SessionProviderProps) {
  const { session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const { getGoals } = useGoal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getGoals();
      } finally {
        setIsLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchData();
    }
  }, [session, status]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <SessionProvider session={session}>
      <Layout session={session}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}