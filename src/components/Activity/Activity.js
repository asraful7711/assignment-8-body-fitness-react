import React from 'react';

const Activity = ({ activity }) => {
    console.log(activity)
    return (
        <div className='relative bg-white h-[550px] rounded-md p-3'>

            <img className='rounded-md  w-11/12 mx-auto mt-4' src={activity.img} alt="" />
            <div>
                <h1 className='my-6 text-xl font-semibold text-center'>{activity.name}</h1>
                <p className='my-3'>{activity.info}</p>
                <p className='my-5'>age:{activity.age}</p>
                <h3 className=''>time required: {activity.time}</h3>
            </div>
            <div className='flex justify-center '>
                <button className="btn btn-info absolute bottom-0  px-16 mb-4 text-white">Add to list</button>
            </div>

        </div>
    );
};

export default Activity;