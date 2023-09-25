
import { useContext } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { MyAllDataContext } from '../Layout/Layout';
import { getDataFromLocalStorage } from '../utility/Utility';








const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {

    const totalDonationData = useContext(MyAllDataContext)
    const yourDonationData = getDataFromLocalStorage("donation")

    const data = [
        { name: 'Total Donations', value: totalDonationData.length || 0 },
        { name: 'Group B', value: yourDonationData.length || 0 }
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  return (
    <div >
      <ResponsiveContainer width="100%" height={400}>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
