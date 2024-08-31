import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const goalId = req.query.goalId as string;

  if (!goalId) {
    return res.status(400).json({ message: "Goal ID is required" });
  }

  try {
    const progressData = await prisma.progress.findMany({
      where: {
        goalId,
      },
      orderBy: {
        date: "asc",
      },
    });

    return res.status(200).json(progressData);
  } catch (error) {
    console.error("Error fetching progress data:", error);
    return res.status(500).json({ message: "Error fetching progress data" });
  } finally {
    await prisma.$disconnect();
  }
}