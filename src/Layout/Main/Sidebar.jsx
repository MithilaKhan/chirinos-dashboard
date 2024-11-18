import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdOutlineAdminPanelSettings, MdOutlineSubscriptions } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi2";
import {  TbUsers, TbUserScreen } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BiBookContent } from 'react-icons/bi';
import { FaQuestion } from 'react-icons/fa6';
import { PiUserPlus, PiUsers } from 'react-icons/pi';
import { LuLayoutDashboard, LuListChecks, LuPackage } from 'react-icons/lu';
import { TfiBarChartAlt } from 'react-icons/tfi';


const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname; 
    const [selectedKey, setSelectedKey] = useState("");
    const [openKeys, setOpenKeys] = useState([]);
    const navigate = useNavigate();


    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/auth/login")
    }

    const menuItems = [
        {
            key: "/",
            icon: <LuLayoutDashboard size={24} />,
            label: <Link to="/" className='' >Dashboard</Link>
        },
        {
            key: "/analytics",
            icon: <TfiBarChartAlt  size={24} />,
            label: <Link to="/analytics">Analytics</Link>
        },
         {
            key: "/customers",
            icon: <TbUsers size={24} />,
            label: <Link to="/customers">Customers</Link>
        }, 
         {
            key: "/sales",
            icon: <LuListChecks size={24} />,
            label: <Link to="/sales">Sales</Link>
        }, 
         {
            key: "/orders",
            icon: <LuPackage size={24} />,
            label: <Link to="/orders">Orders</Link>
        }, 
         {
            key: "/admin",
            icon: <PiUserPlus size={24} />,
            label: <Link to="/admin"> Create Admin</Link>
        }, 
       
        {
            key: "subMenuSetting",
            icon: <IoSettingsOutline size={24} />,
            label: "Settings",
            children: [
           
                { 
                    key: "/terms", 
                    label: <Link to="/terms" className="text-white hover:text-white">Terms & Conditions</Link>
                },
                { 
                    key: "/profile", 
                    label: <Link to="/profile" className="text-white hover:text-white">Profile</Link>
                },
                
            ]
        },
        {
            key: "/logout",
            icon: <IoIosLogOut size={24} />,
            label: <p onClick={handleLogout}>Logout</p>
        },
    ];

    useEffect(() => {
        const selectedItem = menuItems.find(item => 
            item.key === path || item.children?.some(sub => sub.key === path)
        );

        if (selectedItem) {
            setSelectedKey(path);

            if (selectedItem.children) {
                setOpenKeys([selectedItem.key]);
            } else {
                const parentItem = menuItems.find(item => 
                    item.children?.some(sub => sub.key === path)
                );
                if (parentItem) {
                    setOpenKeys([parentItem.key]);
                }
            }
        }
    }, [path]);

    const handleOpenChange = (keys) => {
        setOpenKeys(keys);
    };

    return (
        <div className='mt-5 '>
            <Link to={"/"} className=' flex items-center justify-center py-4'>
          <img src="/logo.png" alt="" />
            </Link>
            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
                style={{ borderRightColor: "transparent", background: "transparent"  }}
                items={menuItems} 
           
            />
        </div>
    )
}

export default Sidebar;
