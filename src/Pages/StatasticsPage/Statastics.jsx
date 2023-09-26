import { useContext } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { MyAllDataContext } from '../../Layout/Layout';
import { getDataFromLocalStorage } from '../../utility/Utility';

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
  const totalDonationData = useContext(MyAllDataContext);
  const yourDonationData = getDataFromLocalStorage("donation");

  const data = [
    { name: 'Total Donations', value: totalDonationData.length || 0 },
    { name: 'Your Donations', value: yourDonationData.length || 0 }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  return (
   <>
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="80%"
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

    <div className='flex gap-10 justify-center  items-center'>
       <div className='flex flex-col lg:flex-row gap-5 items-center'>
        <p className=' font-bold italic'>Your Donation</p>
        <progress className="progress  progress-info w-20" value={ yourDonationData.length || 0 } max="12"></progress>
       </div>
       <div className='flex flex-col lg:flex-row gap-5 items-center'>
        <p className=' font-bold italic'>Total Donation</p>
        <progress  className="progress progress-error  w-20" value={totalDonationData.length} max="12"></progress>
       </div>
    </div>
   </>
  );
};

export default Statistics;
