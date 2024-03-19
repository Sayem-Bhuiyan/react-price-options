import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const students = [
        { "student_id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 90 },
        { "student_id": 2, "name": "Bob", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 75 },
        { "student_id": 3, "name": "Charlie", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 92 },
        { "student_id": 4, "name": "David", "math_marks": 65, "physics_marks": 70, "chemistry_marks": 68 },
        { "student_id": 5, "name": "Emma", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 80 },
        { "student_id": 6, "name": "Frank", "math_marks": 88, "physics_marks": 75, "chemistry_marks": 85 },
        { "student_id": 7, "name": "Grace", "math_marks": 80, "physics_marks": 78, "chemistry_marks": 72 },
        { "student_id": 8, "name": "Harry", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90 },
        { "student_id": 9, "name": "Ivy", "math_marks": 75, "physics_marks": 70, "chemistry_marks": 68 },
        { "student_id": 10, "name": "Jack", "math_marks": 85, "physics_marks": 80, "chemistry_marks": 78 }
      ];
      

    return (
        <div>
            <LChart height={400} width={400} data={students}>
                <Line type={'monotone'} dataKey='math_marks' stroke='#8884d8' />
                <Line dataKey='physics_marks' stroke='aqua' />
                <Line dataKey='chemistry_marks' stroke='red' />
            </LChart>
        </div>
    );
};

export default LineChart;