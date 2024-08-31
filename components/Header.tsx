import { useState } from "react";
import { Session } from "@types/types";
import Link from "next/link";
import Image from "next/image";
import { useGoal } from "@utils/zustand";
import { useRouter } from "next/router";

const Header: React.FC<{ session: Session }> = ({ session }) => {
  const { getGoals } = useGoal();
  const router = useRouter();
  const [isGoalsLoaded, setIsGoalsLoaded] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleGoalsLoad = async () => {
    try {
      await getGoals();
      setIsGoalsLoaded(true);
    } catch (error) {
      console.error("Error loading goals:", error);
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/logo.svg"
              alt="FitTrack Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 font-bold text-xl">FitTrack</span>
          </a>
        </Link>
        <div className="flex items-center">
          {session ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleGoalsLoad}
              >
                Dashboard
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;