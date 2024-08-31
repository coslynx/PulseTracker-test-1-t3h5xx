import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useGoal } from '@utils/zustand';
import { Goal, Session } from '@types/types';
import GoalInput from '@components/GoalInput';
import ProgressChart from '@components/ProgressChart';
import SocialShareButton from '@components/SocialShareButton';
import Button from '@components/Button';

const DashboardPage: React.FC = () => {
  const { data: session, status } = useSession();
  const { goals, addGoal, updateGoal, deleteGoal, getProgressData } = useGoal();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);

  const handleOpenModal = (goalId: string | null) => {
    setSelectedGoalId(goalId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedGoalId(null);
    setIsModalOpen(false);
  };

  const handleGoalSubmit = async (data: Goal) => {
    setIsLoading(true);
    try {
      if (selectedGoalId) {
        await updateGoal(selectedGoalId, data);
      } else {
        await addGoal(data);
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving goal:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoalDelete = async (goalId: string) => {
    setIsLoading(true);
    try {
      await deleteGoal(goalId);
    } catch (error) {
      console.error('Error deleting goal:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch goals on initial load
    const fetchGoals = async () => {
      setIsLoading(true);
      try {
        // Get goals from the API
        // await fetchGoals();
      } catch (error) {
        console.error('Error fetching goals:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGoals();
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-bold mb-4">Please log in to access the dashboard.</p>
        <Button variant="primary" onClick={() => signIn('google')} fullWidth>
          Login with Google
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">FitTrack Dashboard</h1>

      <div className="mb-6">
        <Button variant="primary" onClick={() => handleOpenModal(null)}>
          Set New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">{goal.name}</h2>
            <p className="mb-4">
              Target: {goal.target}
              <br />
              Timeline: {new Date(goal.timeline).toLocaleDateString()}
            </p>
            <ProgressChart goalId={goal.id} />
            <div className="mt-4">
              <Button variant="secondary" onClick={() => handleOpenModal(goal.id)}>
                Edit Goal
              </Button>
              <Button variant="outline" onClick={() => handleGoalDelete(goal.id)}>
                Delete Goal
              </Button>
              <SocialShareButton title={goal.name} url="/" />
            </div>
          </div>
        ))}
      </div>

      <GoalInput
        goalId={selectedGoalId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleGoalSubmit}
      />
    </div>
  );
};

export default DashboardPage;