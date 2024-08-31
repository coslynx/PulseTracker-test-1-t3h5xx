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

  const userId = session.user.id;

  if (req.method === "GET") {
    try {
      const goals = await prisma.goal.findMany({
        where: {
          userId,
        },
      });
      return res.status(200).json(goals);
    } catch (error) {
      console.error("Error fetching goals:", error);
      return res.status(500).json({ message: "Error fetching goals" });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "POST") {
    const { name, target, timeline } = req.body;

    try {
      const newGoal = await prisma.goal.create({
        data: {
          userId,
          name,
          target,
          timeline: new Date(timeline),
        },
      });
      return res.status(201).json(newGoal);
    } catch (error) {
      console.error("Error creating goal:", error);
      return res.status(500).json({ message: "Error creating goal" });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "PUT") {
    const { goalId, name, target, timeline } = req.body;

    try {
      const updatedGoal = await prisma.goal.update({
        where: {
          id: goalId,
          userId,
        },
        data: {
          name,
          target,
          timeline: new Date(timeline),
        },
      });
      return res.status(200).json(updatedGoal);
    } catch (error) {
      console.error("Error updating goal:", error);
      return res.status(500).json({ message: "Error updating goal" });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { goalId } = req.body;

    try {
      const deletedGoal = await prisma.goal.delete({
        where: {
          id: goalId,
          userId,
        },
      });
      return res.status(200).json(deletedGoal);
    } catch (error) {
      console.error("Error deleting goal:", error);
      return res.status(500).json({ message: "Error deleting goal" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}