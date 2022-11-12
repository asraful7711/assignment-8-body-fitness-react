import React from 'react';
import Author from '../Author/Author';
const Records = (props) => {
    // console.log(props.time)
    return (
        <div className='bg-white px-7 sticky top-0'>
            <Author></Author>
            <div className="flex justify-between mt-4">
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>10s</button>
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>20s</button>
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>30s</button>
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>40s</button>
            </div>
            <div className="">
                <p>Exercise time <span>{props.record.length}seconds</span></p>
                <p>Break time <span>200 seconds</span></p>
            </div>
        </div>
    );
};

export default Records;