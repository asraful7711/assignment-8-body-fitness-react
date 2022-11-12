import React from 'react';
import image from './author.png'
const Author = () => {
    return (
        <div>
            <div className="">
                <div className="flex items-center pt-7">
                    <img className='w-[60px] rounded-full mr-2' src={image} alt="" />
                    <div >
                        <h3 className='text-xl font-bold'>Asraful Islam</h3>
                        <p><small>Dhaka, Bangladesh</small></p>
                    </div>
                </div>
                <div className=" flex my-10 bg-slate-200 p-6 rounded-md font-extrabold">
                    <h4 className='text-lg text-center'>6.1 <span className='font-extralight text-sm'>Height</span></h4>
                    <h4 className='text-lg text-center mx-4'>75kg <span className='font-extralight text-sm '>Weight</span></h4>
                    <h4 className='text-lg text-center'>23yrs <span className='font-extralight text-sm'>Age</span></h4>
                </div>
            </div>
            <h4 className='text-lg text-center font-semibold '>Add A Break</h4>

        </div>
    );
};

export default Author;