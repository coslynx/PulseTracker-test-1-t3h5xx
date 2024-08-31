import { Goal } from "@types/types";
import { useGoal } from "./zustand";

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const calculateProgress = (goal: Goal): number => {
  const { target, timeline, progress } = goal;
  const currentDate = new Date();
  const daysRemaining = Math.ceil(
    (timeline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const progressPercentage =
    (progress.length / daysRemaining) * 100 || 0; // 0 if no progress yet
  return progressPercentage;
};

export const getFormattedProgress = (goal: Goal): string => {
  const progressPercentage = calculateProgress(goal);
  return `${progressPercentage.toFixed(0)}%`;
};