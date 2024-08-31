import { Goal } from "@types/types";

export const validateGoal = (goal: Goal) => {
  if (!goal.name || goal.name.length < 3) {
    throw new Error("Goal name must be at least 3 characters long.");
  }

  if (!goal.target || goal.target < 1) {
    throw new Error("Target value must be at least 1.");
  }

  if (!goal.timeline || goal.timeline < new Date()) {
    throw new Error("Timeline must be a future date.");
  }

  return true;
};