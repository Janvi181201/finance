import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../features/budgetSlice';

const AddIncome = () => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!amount || !source) return;
    dispatch(addIncome({ id: Date.now(), amount: +amount, source }));
    setAmount('');
    setSource('');
  };

  return (
    <div className="card p-3 mb-3">
      <h5>Add Income</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={e => setSource(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="form-control mb-2"
        />
        <button className="btn btn-success w-100">Add Income</button>
      </form>
    </div>
  );
};

export default AddIncome;
