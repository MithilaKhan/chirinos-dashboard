import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import UserChart from "../../components/ui/Home/UserChart";
import { BsCart3 } from "react-icons/bs";
import { LuListChecks, LuPackage } from "react-icons/lu";
import RunningOrdersTable from "../../components/ui/Home/RunningOrdersTable";




const Home = ()=>{  

    const summaryData = [
        {
            icon: <LuPackage color="#FFC00C" className="" size={24} /> ,
            title:"Total Orders" ,
            price: 1000
        } , 
        {
            icon: <LuListChecks color="#FFC00C" className="" size={24} /> ,
            title:"Total Sales" ,
            price: 600
        } , 
        {
            icon: <BsCart3 color="#FFC00C" className="" size={24} /> ,
            title:"Total Products" ,
            price: 500
        } , 
        {
            icon: <MdOutlineAttachMoney color="#FFC00C" className="" size={24} /> ,
            title:"Total Earning" ,
            price: 700
        } , 

    ]


    return (
        <div>

            <div className="grid grid-cols-4 gap-6 h-[100px]">  
                {
                    summaryData?.map((value , index)=>     <div key={index} className='bg-white rounded-lg py-0 px-6 flex items-center justify-between gap-4'>  
                    <div className="flex items-center gap-3"> 

                    <div className=" w-10 h-10 rounded-full bg-[#f3f2f2] flex items-center justify-center "> 

                  {value?.icon}
                    </div>
                    <h2 className="text-center text-2xl text-base ">{value?.title}</h2>

                    </div>
                    <h3 className="text-center text-primary text-[32px] font-semibold">${value?.price}</h3>
                </div>)
                }

           

            </div> 

            <div className=" w-full bg-white rounded-lg  h-[330px] mt-3"> 
            <p className="text-base font-semibold px-4 py-4 text-[18px] ">Selling Status</p>  
            <UserChart />
            </div> 
 
 <div className=" mt-3"> 
    <RunningOrdersTable />
 </div>

     
        </div>
    );
}

export default Home;