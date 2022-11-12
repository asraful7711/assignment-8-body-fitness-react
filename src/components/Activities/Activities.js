import React from 'react';
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Activities = (props) => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    console.log(props)
    return (
        <div>
            <h1 className='font-bold text-4xl mt-7 text-orange-300'><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> Pro Body Fitness </h1>
            <h2 className='font-bold text-2xl my-6 text-slate-500'>Age Select today's exercise</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {
                    activities.map(activity => <Activity activity={activity}></Activity>)
                }
            </div>

        </div>
    );
};

export default Activities;