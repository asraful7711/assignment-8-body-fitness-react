import React, { useState } from 'react';
import Author from '../Author/Author';
import { addToDb } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Records = ({ record }) => {
    const setSecond = localStorage.getItem('break-time');
    const [rest, setRest] = useState([setSecond]);
    let totalTime = 0;
    for (const detail of record) {
        totalTime = totalTime + detail.time
    }

    const addBreak = (pause) => {
        setRest(pause);
        addToDb(pause);

    }
    const notify = () => toast.success("Activity Completed")

    return (
        <div className='bg-white px-7 sticky top-0 pb-10'>
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
                    <span>Exercise time:</span> <span className='text-gray-400'> {totalTime} seconds</span>
                </p>
                <p className='py-3 px-2 flex justify-between bg-slate-200 rounded-md'>
                    <span>Break time:</span> <span className='text-gray-400'>{rest} seconds</span>
                </p>
            </div>
            <button onClick={notify} className='btn btn-info text-white font-semibold w-full '>
                Activity Completed
                <ToastContainer></ToastContainer>
            </button>
        </div>
    );
};

export default Records;