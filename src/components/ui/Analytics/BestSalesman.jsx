import React from 'react'; 
import { Progress, Select } from 'antd';  
const {Option} = Select

const BestSalesman = () => {
    const RatedSalesman = [
        {
          userimg: "https://picsum.photos/seed/user1/100",
          userName: "John Doe",
          progress: 70,
          id: 1
        },
        {
          userimg: "https://picsum.photos/seed/user2/100",
          userName: "Jane Smith",
          progress: 85,
          id: 2
        },
        {
          userimg: "https://picsum.photos/seed/user3/100",
          userName: "Emily Johnson",
          progress: 60,
          id: 3
        },
        {
          userimg: "https://picsum.photos/seed/user4/100",
          userName: "Michael Brown",
          progress: 75,
          id: 4
        },
        {
          userimg: "https://picsum.photos/seed/user5/100",
          userName: "Sarah Davis",
          progress: 90,
          id: 5
        }
      ];

      const Options = [
        {
            value:"Weakly" ,
            label:"Weakly"
        } ,
        {
            value:"Monthly" ,
            label:"Monthly"
        } ,
      ]  

    return (
        <div>
                  <div  className='flex items-center justify-between px-4 py-5 '> 
        <p className="text-[18px] font-semibold ">Best Rated Salesman</p>  
 
        <Select className=" rounded  h-[40px] w-[120px]" defaultValue="Weakly">
        {Options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>   

        </div> 
  
  <div className=''> 
    {
       RatedSalesman?.map((value , index)=><div key={index} className=' flex items-center justify-between px-7 mb-3'> 
  <div className=' flex items-center gap-3'>
    <img src={value?.userimg} alt="" className=' w-[40px] h-[40px] rounded-full' /> 
    <p>{value?.userName}</p>
  </div> 
 
 <div className='w-[350px]'>
  <Progress percent={value?.progress} strokeColor="#00006A"  />
 </div>
       </div>) 
    }
  </div>
        </div>
    );
};

export default BestSalesman;