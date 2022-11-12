import React from 'react';
import Author from '../Author/Author';
const Records = ({ record }) => {
    let totalTime = 0;
    for (const detail of record) {
        totalTime = totalTime + detail.time
    }
    return (
        <div className='bg-white px-7 sticky top-0'>
            <Author></Author>
            <div className="flex justify-between mt-4">
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>10s</button>
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>20s</button>
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>30s</button>
                <button className=' btn btn-circle text-lg bg-blue-300 border-none'>40s</button>
            </div>
            <div className="my-6 text-lg font-bold">
                <p className='mb-3'>Exercise Details</p>
                <p className='py-3 px-2 flex justify-between bg-slate-200 mb-4 rounded-md'>
                    <span>Exercise time:</span> <span className='text-gray-400'> {totalTime} sec</span>
                </p>
                <p className='py-3 px-2 flex justify-between bg-slate-200 rounded-md'>
                    <span>Exercise time:</span> <span className='text-gray-400'>sec</span>
                </p>
            </div>
        </div>
    );
};

export default Records;