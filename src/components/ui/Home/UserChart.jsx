import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', Sales: 5, Order: 5 },
  { name: 'Feb', Sales: 4, Order: 4 },
  { name: 'Mar', Sales: 8, Order: 8 },
  { name: 'Apr',  Sales: 15, Order: 10 },
  { name: 'May', Sales: 10, Order: 15 },
  { name: 'Jun', Sales: 3, Order: 7 },
  { name: 'Jul',  Sales: 10, Order: 8 },
  { name: 'Aug', Sales: 15, Order: 12 },
  { name: 'Sep',  Sales: 18, Order: 14 },
  { name: 'Oct',  Sales: 10, Order: 10 },
  { name: 'Nov', Sales: 4, Order: 6 },
  { name: 'Dec', Sales: 2, Order: 3 },
];

const UserBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Order" fill="#FFC00C" />    
        <Bar dataKey="Sales" fill="#8C0000" />  
       
    </BarChart>
    </ResponsiveContainer> 
  );
};

export default UserBarChart;
