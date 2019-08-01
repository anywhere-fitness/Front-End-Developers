import React, { useEffect}  from 'react'
import Nav from './TrainerNavBar'
import { CreateClass } from './trainerCreateClass';
import { MyClasses } from './MyClasses';


export function TrainerDashboard (){


    return (
        <div>
            <Nav />
        <div className="dashboardContainer">
           <CreateClass/>
           <MyClasses />
        </div>
        </div>
    )
}