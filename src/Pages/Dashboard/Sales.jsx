import React, { useState } from 'react';

import { ConfigProvider, Input, Table } from 'antd';
import { BsSearch } from 'react-icons/bs';
import Title from '../../components/common/Title';
 
const data = [
    {
      userimg: "https://picsum.photos/seed/user1/100",
      userName: "John Doe",
      email: "john.doe@example.com",
      contact: "123-456-7890",
      status: "Active",
      id: 1
    },
    {
      userimg: "https://picsum.photos/seed/user2/100",
      userName: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "987-654-3210",
      status: "Inactive",
      id: 2
    },
    {
      userimg: "https://picsum.photos/seed/user3/100",
      userName: "Emily Johnson",
      email: "emily.johnson@example.com",
      contact: "555-123-4567",
      status: "Active",
      id: 3
    },
    {
      userimg: "https://picsum.photos/seed/user4/100",
      userName: "Michael Brown",
      email: "michael.brown@example.com",
      contact: "444-567-8901",
      status: "Pending",
      id: 4
    },
    {
      userimg: "https://picsum.photos/seed/user5/100",
      userName: "Sarah Davis",
      email: "sarah.davis@example.com",
      contact: "333-678-9012",
      status: "Active",
      id: 5
    },
    {
      userimg: "https://picsum.photos/seed/user6/100",
      userName: "Chris Wilson",
      email: "chris.wilson@example.com",
      contact: "222-789-0123",
      status: "Inactive",
      id: 6
    },
    {
      userimg: "https://picsum.photos/seed/user7/100",
      userName: "Laura Martin",
      email: "laura.martin@example.com",
      contact: "111-890-1234",
      status: "Active",
      id: 7
    },
    {
      userimg: "https://picsum.photos/seed/user8/100",
      userName: "Daniel Anderson",
      email: "daniel.anderson@example.com",
      contact: "999-012-3456",
      status: "Pending",
      id: 8
    },
    {
      userimg: "https://picsum.photos/seed/user9/100",
      userName: "Sophia Moore",
      email: "sophia.moore@example.com",
      contact: "888-123-4567",
      status: "Active",
      id: 9
    },
    {
      userimg: "https://picsum.photos/seed/user10/100",
      userName: "James Lee",
      email: "james.lee@example.com",
      contact: "777-234-5678",
      status: "Inactive",
      id: 10
    }
  ];
  

const Sales = () => { 
    
    const [search, setSearch] = useState("") 
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const columns = [
        {
            title: "Serial No.",
            dataIndex: "name",
            key: "name",
            render: (_,record, index) =><p>{((page - 1) * itemsPerPage) + index + 1}</p>
        },
        {
            title: "User Name",
            dataIndex: "name",
            key: "name", 
            render:(_, record) =><div className=' flex items-center gap-2'> 
 <img src={record?.userimg} alt=""  className=' w-[38px] h-[38px] rounded-full'/> 
 <p className=''>{record?.userName}</p>
            </div>
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },       
        {
            title: "Status",
            dataIndex: "status",
            key: "status",    
            render:(status)=><p className={status === "Active" ? "text-green-600" : "text-orange-600"}> {status}</p>   
        },
        {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
        },  
        {
            title: "Action",
            dataIndex: "action",
            key: "action", 
            render:(_, record) => <div className=' flex items-center gap-3'>   
                <button className=' bg-primary text-white w-[110px] h-[35px] rounded'> Details</button>
             < button className=' text-[#FF7568] rounded  border border-[#FF7568] w-[110px] h-[35px]'> Restrict</button>
            </div>      
        },
   
    ];
 
    return (
        <div>
        <div className='flex items-center justify-between mb-3'>
             <Title >Sales</Title>
             <Input
                 style={{
                     width: 450, 
                     height: 40,
                     outline: "none",
                     border: "1px solid #d9d9d9",
                     boxShadow: "none"
                 }} 
                 prefix={<BsSearch size={20} />}
                 placeholder="Search.."
                 onChange={(e)=>setSearch(e.target.value)}
             />
         </div>

         <ConfigProvider
             theme={{
                 components: {
                     Pagination: {
                         itemActiveBg: "#007BA5",
                         borderRadius: "100%"
                     }
                 },
                 token:{
                     colorPrimary: "white"
                 }
             }}
         >
             <Table 
                 columns={columns} 
                 dataSource={data} 
                 pagination={{
                     current: parseInt(page),
                     onChange: (page)=> setPage(page)
                 }}
             />
         </ConfigProvider>
     </div>
    );
};

export default Sales;