import { useState } from "react";
import { useGoal } from "@utils/zustand";
import { GoalInputProps } from "@types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const goalSchema = yup.object().shape({
  name: yup
    .string()
    .required("Goal name is required")
    .min(3, "Goal name must be at least 3 characters long"),
  target: yup
    .number()
    .required("Target value is required")
    .min(1, "Target value must be at least 1"),
  timeline: yup
    .date()
    .required("Timeline is required")
    .min(new Date(), "Timeline must be a future date"),
});

const GoalInput: React.FC<GoalInputProps> = ({
  goalId,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GoalInputProps>({
    resolver: yupResolver(goalSchema),
    defaultValues: {
      name: "",
      target: 0,
      timeline: new Date(),
    },
  });

  const { getGoalById } = useGoal();

  useEffect(() => {
    if (goalId) {
      const fetchGoal = async () => {
        const goal = await getGoalById(goalId);
        if (goal) {
          reset({
            name: goal.name,
            target: goal.target,
            timeline: new Date(goal.timeline),
          });
        }
      };
      fetchGoal();
    }
  }, [goalId, getGoalById, reset]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-lg p-6">
        <h2 className="text-xl font-bold mb-4">
          {goalId ? "Edit Goal" : "Set New Goal"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Goal Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="target"
              className="block text-gray-700 font-bold mb-2"
            >
              Target Value:
            </label>
            <input
              type="number"
              id="target"
              {...register("target")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.target ? "border-red-500" : ""
              }`}
            />
            {errors.target && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.target.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="timeline"
              className="block text-gray-700 font-bold mb-2"
            >
              Timeline:
            </label>
            <input
              type="date"
              id="timeline"
              {...register("timeline")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.timeline ? "border-red-500" : ""
              }`}
            />
            {errors.timeline && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.timeline.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {goalId ? "Save Changes" : "Set Goal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalInput;