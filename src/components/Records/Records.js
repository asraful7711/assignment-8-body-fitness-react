import React, { useState } from 'react';
import Author from '../Author/Author';
const Records = ({ record }) => {
    const [rest, setRest] = useState([]);
    let totalTime = 0;
    for (const detail of record) {
        totalTime = totalTime + detail.time
    }
    let totalBreak = 0;
    const addBreak = (pause) => {
        // console.log(pause);
        const newBreak = [...rest, pause]
        setRest(newBreak)

    }
    for (const time of rest) {
        console.log(time)
        totalBreak = totalBreak + time
        console.log(totalBreak)
    }

    return (
        <div className='bg-white px-7 sticky top-0'>
            <Author></Author>
            <div className="flex justify-between mt-4 bg-slate-100 py-3 px-2 rounded-lg">
                <button onClick={() => addBreak(10)} className=' btn btn-circle text-lg bg-blue-300 border-none'>10s</button>
                <button onClick={() => addBreak(20)} className=' btn btn-circle text-lg bg-blue-300 border-none'>20s</button>
                <button onClick={() => addBreak(30)} className=' btn btn-circle text-lg bg-blue-300 border-none'>30s</button>
                <button onClick={() => addBreak(40)} className=' btn btn-circle text-lg bg-blue-300 border-none'>40s</button>
            </div>
            <div className="my-6 text-lg font-bold">
                <p className='mb-3'>Exercise Details</p>
                <p className='py-3 px-2 flex justify-between bg-slate-200 mb-4 rounded-md'>
                    <span>Exercise time:</span> <span className='text-gray-400'> {totalTime} sec</span>
                </p>
                <p className='py-3 px-2 flex justify-between bg-slate-200 rounded-md'>
                    <span>Exercise time:</span> <span className='text-gray-400'>{totalBreak}sec</span>
                </p>
            </div>
        </div>
    );
};

export default Records;