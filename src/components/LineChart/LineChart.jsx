import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: "Student 1", math: 85, physics: 75, chemistry: 80 },
        { id: 2, name: "Student 2", math: 78, physics: 70, chemistry: 85 },
        { id: 3, name: "Student 3", math: 92, physics: 88, chemistry: 90 },
        { id: 4, name: "Student 4", math: 67, physics: 72, chemistry: 65 },
        { id: 5, name: "Student 5", math: 88, physics: 85, chemistry: 92 },
        { id: 6, name: "Student 6", math: 73, physics: 68, chemistry: 75 },
        { id: 7, name: "Student 7", math: 90, physics: 84, chemistry: 88 },
        { id: 8, name: "Student 8", math: 81, physics: 78, chemistry: 82 },
        { id: 9, name: "Student 9", math: 95, physics: 92, chemistry: 96 },
        { id: 10, name: "Student 10", math: 79, physics: 76, chemistry: 81 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;