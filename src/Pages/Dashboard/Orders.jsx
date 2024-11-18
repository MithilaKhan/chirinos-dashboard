import { ConfigProvider, Input, Table, Tag } from 'antd';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'; 
import Title from '../../components/common/Title';

const data = [
    {
      key: '1',
      product: 'Bike Filters * 13 items',
      price: '$121',
      quantity: 21,
      shopName: 'Stanford',
      date: '05/12/2024',
      deliveryReceiver: {
        name: 'Foysal Rahman',
        contact: '+1 (239) 555-0108',
      },
      status: 'Completed',
    },
    {
      key: '2',
      product: 'Bike Filters * 13 items',
      price: '$121',
      quantity: 12,
      shopName: 'Spring Foods',
      date: '05/12/2024',
      deliveryReceiver: {
        name: 'Jawwad Hossain',
        contact: '+1 (239) 555-0108',
      },
      status: 'Completed',
    },
    {
      key: '3',
      product: 'Bike Filters * 13 items',
      price: '$121',
      quantity: 21,
      shopName: 'Scroll Through',
      date: '05/12/2024',
      deliveryReceiver: {
        name: 'Al-Amin',
        contact: '+1 (239) 555-0108',
      },
      status: 'Completed',
    },
    {
      key: '4',
      product: 'Bike Filters * 13 items',
      price: '$121',
      quantity: 21,
      shopName: 'Widehaven',
      date: '05/12/2024',
      deliveryReceiver: {
        name: 'Alamgir Kabir',
        contact: '+1 (239) 555-0108',
      },
      status: 'Canceled',
    },
    {
      key: '5',
      product: 'Helmet * 5 items',
      price: '$80',
      quantity: 10,
      shopName: 'Gearhouse',
      date: '05/15/2024',
      deliveryReceiver: {
        name: 'Nashit Malik',
        contact: '+1 (239) 555-0111',
      },
      status: 'Completed',
    },
    {
      key: '6',
      product: 'Gloves * 20 items',
      price: '$50',
      quantity: 50,
      shopName: 'Spring Foods',
      date: '05/18/2024',
      deliveryReceiver: {
        name: 'Fahim Shah',
        contact: '+1 (239) 555-0222',
      },
      status: 'Pending',
    },
    {
      key: '7',
      product: 'Bike Seat * 10 items',
      price: '$200',
      quantity: 30,
      shopName: 'Widehaven',
      date: '05/22/2024',
      deliveryReceiver: {
        name: 'Tariq Anwar',
        contact: '+1 (239) 555-0333',
      },
      status: 'Completed',
    },
    {
      key: '8',
      product: 'Handlebars * 7 items',
      price: '$70',
      quantity: 18,
      shopName: 'Scroll Through',
      date: '05/25/2024',
      deliveryReceiver: {
        name: 'Farhan Ali',
        contact: '+1 (239) 555-0444',
      },
      status: 'Canceled',
    },
    {
      key: '9',
      product: 'Pedals * 20 items',
      price: '$90',
      quantity: 25,
      shopName: 'Stanford',
      date: '05/30/2024',
      deliveryReceiver: {
        name: 'Samiur Rahman',
        contact: '+1 (239) 555-0555',
      },
      status: 'Completed',
    },
    {
      key: '10',
      product: 'Chains * 15 items',
      price: '$120',
      quantity: 40,
      shopName: 'Gearhouse',
      date: '06/01/2024',
      deliveryReceiver: {
        name: 'Zahid Khan',
        contact: '+1 (239) 555-0666',
      },
      status: 'Pending',
    },
  ];

const Orders = () => {   
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
          title: 'Products Item',
          dataIndex: 'product',
          key: 'product',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
          title: 'Shop Name',
          dataIndex: 'shopName',
          key: 'shopName',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Delivery Received By',
          key: 'deliveryReceiver',
          render: (_, record) => (
            <div>
              <div className='text-[13px]'>{record.deliveryReceiver.name}</div>
              <div className='text-[11px]' style={{ color: 'gray' }}>{record.deliveryReceiver.contact}</div>
            </div>
          ),
        },
        {
          title: 'Action',
          key: 'status',
          render: (_, record) => (
            <Tag color={record.status === 'Completed' ? 'green' : 'red'}>
              {record.status}
            </Tag>
          ),
        },
      ];

    return (
        <div>
        <div className='flex items-center justify-between mb-3'>
             <Title >Orders</Title>
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

export default Orders;