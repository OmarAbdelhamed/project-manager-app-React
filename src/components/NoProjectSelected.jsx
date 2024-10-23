import React from 'react';
import noProjectImg from '../assets/no-projects.png';
import Button from './Button';
const NoProjectSelected = ({onAdd}) => {
  return (
    <div className='mt-24 text-center w-2/3 '>
      <img
        src={noProjectImg}
        alt='no project selected'
        className=' w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        No Project Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Please select a project or get started with a now one
      </p>
      <p className='mt-8'>
        <Button onClick={onAdd}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
