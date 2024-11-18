import { ConfigProvider, Tabs } from "antd";
import Title from "../../components/common/Title";
import CustomerTerms from "./CustomerTerms";
import SalesTerms from "./SalesTerms";


const Terms = () => {
 
  const items = [
    {
      key: "1",
      label: "Customers",
      children: <CustomerTerms />,
    },
    {
      key: "2",
      label: "Sales ",
      children: <SalesTerms />,
    },
  ]; 

  return (
    <div>
    <Title className="mb-4">Terms & Conditions</Title>
         <div
   
           className=" bg-white p-5 px-10 rounded-xl "
         >
           <ConfigProvider
             theme={{
               components: {
                 Tabs: {
                   itemActiveColor: "#FFC00C",
                   itemSelectedColor: "#FFC00C",
                   inkBarColor: "#FFC00C",
                   itemHoverColor: "#FFC00C"
                 },
               },
             }}
           >
   
             <Tabs defaultActiveKey="1" items={items} />
           </ConfigProvider>
         </div>
   
       </div>
  );
};

export default Terms;
