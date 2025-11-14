import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const { incomes, expenses } = useSelector(state => state.budget);
  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="card p-3">
      <h5>This Month</h5>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpense}</p>
      <p>Net: ${totalIncome - totalExpense}</p>
    </div>
  );
};

export default Summary;
