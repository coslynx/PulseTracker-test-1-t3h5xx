import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useGoal } from "@utils/zustand";
import Link from "next/link";
import Button from "@components/Button";
import { Session } from "@types/types";

const LoginPage: React.FC = () => {
  const { data: session, status } = useSession();
  const { getGoals } = useGoal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">FitTrack Login</h2>
        {session ? (
          <>
            <p>You are logged in as {session.user?.name}</p>
            <Button variant="primary" onClick={handleLogout} fullWidth disabled={isLoading}>
              {isLoading ? "Logging out..." : "Logout"}
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={handleLogin} fullWidth disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login with Google"}
            </Button>
            <div className="mt-4 text-center">
              <span>Don't have an account? </span>
              <Link href="/signup">
                <a className="text-blue-500 font-bold">Sign up</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;