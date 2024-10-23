import React, { useState } from 'react';

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleSubmit() {
    if (enteredTask.trim().length === 0) {
      return;
    }
    setEnteredTask('');
    onAddTask(enteredTask);
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        onChange={handleChange}
        value={enteredTask}
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        type='text'
      />
      <button
        onClick={handleSubmit}
        className='text-stone-700 hover:text-stone-900'
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
