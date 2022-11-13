import React from 'react';

const Activity = (props) => {
    const { addTime, activity } = props
    const { img, name, info, age, time } = activity
    return (
        <div className='relative bg-white h-[550px] rounded-md p-3'>

            <img className='rounded-md  w-11/12 mx-auto mt-4' src={img} alt="" />
            <div>
                <h1 className='my-2 text-2xl text-orange-400 font-bold text-center'>{name}</h1>
                <p className='my-3 text-lg  text-slate-500'>{info}</p>
                <p className='my-2 text-lg font-bold'>age: {age}</p>
                <h3 className='font-bold'>time required: {time}</h3>
            </div>
            <div className='flex justify-center '>
                <button onClick={() => addTime(activity)} className="btn btn-info absolute bottom-0  px-16 mb-4 text-white">Add to list</button>
            </div>

        </div>
    );
};

export default Activity;