import { Select } from 'antd';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RetentionRate = () => {
  const [selectedOption, setSelectedOption] = useState('Weakly');

  // Data for each option
  const dataWeakly = [
    { name: 'Active', value: 350 },
    { name: 'Inactive', value: 650 },
  ];

  const dataMonthly = [
    { name: 'Active', value: 450 },
    { name: 'Inactive', value: 550 },
  ];

  // Dynamic data based on selection
  const data = selectedOption === 'Weakly' ? dataWeakly : dataMonthly;

  const COLORS = ['#ffebb4', '#ffc00c'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const options = [
    {
      value: 'Weakly',
      label: 'Weakly',
    },
    {
      value: 'Monthly',
      label: 'Monthly',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-5">
        <p className="text-[18px] font-semibold">Retention Rate</p>

        <Select
          className="rounded h-[40px] w-[120px]"
          defaultValue="Weakly"
          onChange={(value) => setSelectedOption(value)} // Update state on selection
        >
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
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
    </div>
  );
};

export default RetentionRate;
