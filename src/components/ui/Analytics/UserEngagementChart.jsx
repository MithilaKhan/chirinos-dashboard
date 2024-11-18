import { Select } from 'antd';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';  
const {Options} = Select



const data = [
  { name: 'Jan', TotalUsers: 10000, ActiveUsers: 4000 },
  { name: 'Feb', TotalUsers: 20000, ActiveUsers: 8000 },
  { name: 'Mar', TotalUsers: 30000, ActiveUsers: 12000 },
  { name: 'Apr', TotalUsers: 50000, ActiveUsers: 20000 },
  { name: 'May', TotalUsers: 60000, ActiveUsers: 25000 },
  { name: 'Jun', TotalUsers: 50000, ActiveUsers: 22000 },
  { name: 'Jul', TotalUsers: 70000, ActiveUsers: 30000 },
  { name: 'Aug', TotalUsers: 80000, ActiveUsers: 35000 },
  { name: 'Sep', TotalUsers: 85000, ActiveUsers: 40000 },
  { name: 'Oct', TotalUsers: 75000, ActiveUsers: 30000 },
  { name: 'Nov', TotalUsers: 50000, ActiveUsers: 20000 },
  { name: 'Dec', TotalUsers: 30000, ActiveUsers: 15000 },
];

const UserEngagementChart = () => { 
    const Options =[
        {
            value:"Weakly" ,
            label:"Weakly"
        } ,
        {
            value:"Yearly" ,
            label:"Yearly"
        } 
    ]
    return (
        <div className="  w-full bg-white rounded-lg  ">  
        <div  className='flex items-center justify-between px-4 py-5 '> 
        <p className="text-[18px] font-semibold ">User Engagement</p>  
 
        <Select className=" rounded  h-[40px] w-[120px]" defaultValue="Weakly">
        {Options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>   

        </div>
        <div style={{ height: '400px' }}>
<ResponsiveContainer width="100%" height="100%">
<LineChart
width={500}
height={300}
data={data}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="ActiveUsers" stroke="#FFC00C"  activeDot={{ r: 8 }} />
<Line type="monotone" dataKey="TotalUsers" stroke="#00006A" />
</LineChart>
</ResponsiveContainer>
</div> 
</div>
    );
};

export default UserEngagementChart;