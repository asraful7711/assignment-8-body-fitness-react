import React from 'react';

const Questions = () => {
    return (
        <div className='w-full mx-auto text-center text-white bg-slate-800 p-10'>
            <div className="">
                <h2 className='text-lg font-semibold'>How does react works?</h2>
                <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces</p>
            </div>
            <div className="my-11">
                <h2 className='text-lg font-semibold'>Difference between props and state?</h2>
                <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className="">
                <h2 className='text-lg font-semibold'>what does useeffect do?</h2>
                <p>Ans: By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>


            </div>
        </div>
    );
};

export default Questions;