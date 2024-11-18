import React from 'react';
import UserEngagementChart from '../../components/ui/Analytics/UserEngagementChart';

import BestSalesman from '../../components/ui/Analytics/BestSalesman';
import RetentionRate from '../../components/ui/Analytics/RetentionRate';


const Analytics = () => {
  
    return (
        <div>

            <div>
                <UserEngagementChart />
            </div>

            <div className=' grid grid-cols-2 gap-7 mt-7'>

                <div className=' col-span-1 bg-white rounded-lg  '>
          <BestSalesman />

                </div>

                <div className=' col-span-1 bg-white rounded-lg  '>
<RetentionRate />
                </div>

            </div>
        </div>
    );
};

export default Analytics;