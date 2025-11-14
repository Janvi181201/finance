import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../features/budgetSlice';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!amount || !category) return;
    dispatch(addExpense({ id: Date.now(), amount: +amount, category }));
    setAmount('');
    setCategory('');
  };

  return ( 
    <div className="card p-3 mb-3">
      <h5>Add Expense</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="form-control mb-2"
        />
        <button className="btn btn-danger w-100">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
