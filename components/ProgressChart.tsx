import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useGoal } from "@utils/zustand";

interface ProgressChartProps {
  goalId: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ goalId }) => {
  const { getProgressData } = useGoal();
  const [progressData, setProgressData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProgressData(goalId);
      setProgressData(data);
    };
    fetchData();
  }, [goalId, getProgressData]);

  return (
    <LineChart
      width={600}
      height={300}
      data={progressData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ProgressChart;