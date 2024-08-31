import { useSession } from "next-auth/react";
import { useGoal } from "@utils/zustand";
import { Session } from "@types/types";
import Link from "next/link";
import Button from "@components/Button";

const IndexPage: React.FC = () => {
  const { data: session, status } = useSession();
  const { getGoals } = useGoal();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Welcome to FitTrack</h2>
        {session ? (
          <>
            <p>You are logged in as {session.user?.name}</p>
            <Link href="/dashboard">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                Go to Dashboard
              </a>
            </Link>
          </>
        ) : (
          <>
            <p className="mb-4">
              Track your fitness goals, monitor your progress, and connect with a supportive community.
            </p>
            <Button variant="primary" onClick={() => signIn("google")} fullWidth>
              Login with Google
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

export default IndexPage;