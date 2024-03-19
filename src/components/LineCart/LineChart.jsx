import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const LineChart = () => {
  const studentData = [
    { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 90 },

    { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 82, chemistryMarks: 85 },

    { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 88, chemistryMarks: 94 },

    { id: 4, name: "David", mathMarks: 64, physicsMarks: 72, chemistryMarks: 68 },

    { id: 5, name: "Emma", mathMarks: 89, physicsMarks: 91, chemistryMarks: 87 },

    { id: 6, name: "Frank", mathMarks: 72, physicsMarks: 66, chemistryMarks: 74 },

    { id: 7, name: "Grace", mathMarks: 81, physicsMarks: 85, chemistryMarks: 79 },

    { id: 8, name: "Hannah", mathMarks: 93, physicsMarks: 96, chemistryMarks: 90 },

    { id: 9, name: "Ian", mathMarks: 75, physicsMarks: 78, chemistryMarks: 72 },

    { id: 10, name: "Jack", mathMarks: 87, physicsMarks: 84, chemistryMarks: 88 },
  ];

  return (
    <div className="overflow-x-scroll">
      <LChart width={800} height={400} data={studentData}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Line dataKey="mathMarks" stroke="#8884d8"></Line>
        <Line dataKey="physicsMarks" stroke="#3242A3 "></Line>
        <Line dataKey="chemistryMarks" stroke="#ADC928 "></Line>
        <CartesianGrid />
        <Tooltip />
      </LChart>
    </div>
  );
};

export default LineChart;
