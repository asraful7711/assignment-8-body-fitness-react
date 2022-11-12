import React from 'react';
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Records from '../Records/Records';
const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    const addTime = (activity) => {
        const newRecord = [...record, activity];
        setRecord(newRecord);
        console.log(newRecord)
    }
    return (
        <div className='lg:grid grid-cols-4 bg-slate-100'>
            <div className="activity-container col-span-3 ml-11">
                <h1 className='font-bold text-4xl mt-7 text-orange-300'><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> Pro Body Fitness </h1>
                <h2 className='font-bold text-2xl my-6 text-slate-500'>Age Select today's exercise</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {
                        activities.map(activity => <Activity activity={activity} key={activity.id} addTime={addTime}></Activity>)
                    }
                </div>
            </div>
            <div className="record-container ml-16 bg-white">
                <Records record={record} ></Records>

            </div>

        </div>

    );
};

export default Activities;