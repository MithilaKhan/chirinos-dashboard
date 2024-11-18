import { Table, Tag } from 'antd';
import React from 'react'; 

const data = [
    {
      key: "1",
      orderNo: "#65464",
      budget: "$253",
      date: "9-11-24",
      customerName: "Mike Jackson",
      salesPerson: "Tuhin Ahemd",
      product: "Bike Filter Xd122",
      orderDetails: "Processing",
    },
    {
      key: "2",
      orderNo: "#65464",
      budget: "$253",
      date: "9-11-24",
      customerName: "Mike Jackson",
      salesPerson: "Tuhin Ahemd",
      product: "Bike Filter Xd122",
      orderDetails: "Completed",
    },
    {
      key: "3",
      orderNo: "#65464",
      budget: "$253",
      date: "9-11-24",
      customerName: "Mike Jackson",
      salesPerson: "Tuhin Ahemd",
      product: "Bike Filter Xd122",
      orderDetails: "Delivering",
    },
    {
      key: "4",
      orderNo: "#65464",
      budget: "$253",
      date: "9-11-24",
      customerName: "Mike Jackson",
      salesPerson: "Tuhin Ahemd",
      product: "Bike Filter Xd122",
      orderDetails: "Cancelled",
    },
    {
      key: "5",
      orderNo: "#65464",
      budget: "$253",
      date: "9-11-24",
      customerName: "Mike Jackson",
      salesPerson: "Tuhin Ahemd",
      product: "Bike Filter Xd122",
      orderDetails: "View Details",
    },
  ];
 

const RunningOrdersTable = () => { 
    const columns = [
        {
          title: "Order No.",
          dataIndex: "orderNo",
          key: "orderNo",
        },
        {
          title: "Budget",
          dataIndex: "budget",
          key: "budget",
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Customer Name",
          dataIndex: "customerName",
          key: "customerName",
        },
        {
          title: "Sales Person",
          dataIndex: "salesPerson",
          key: "salesPerson",
        },
        {
          title: "Product",
          dataIndex: "product",
          key: "product",
        },
        {
          title: "Order Details",
          key: "orderDetails",
          render: (text, record) => (
            <Tag color={getStatusColor(record.orderDetails)} className='h-[30px] w-1/2 flex items-center justify-center'>
              {record.orderDetails}
            </Tag>
          ),
        },
      ];
    

      const getStatusColor = (status) => {
        switch (status) {
          case "Processing":
            return "orange";
          case "Completed":
            return "green";
          case "Delivering":
            return "blue";
          case "Cancelled":
            return "red";
          default:
            return "gray";
        }
      };
    return (
        <div>
             <Table dataSource={data} columns={columns} />
        </div>
    );
};

export default RunningOrdersTable;