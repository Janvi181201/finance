import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { clearAll } from '../features/budgetSlice';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

const BudgetList = () => {
  const { incomes, expenses } = useSelector(state => state.budget);
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('asc');

  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const net = totalIncome - totalExpense;

  const sortedExpenses = [...expenses].sort((a, b) =>
    sortType === 'asc' ? a.amount - b.amount : b.amount - a.amount
  );

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  return (
    <div className="budget-container">
      {/* Summary Section */}
      <div className="summary-grid">
        <div className="summary-card income">
          <h5>Total Income</h5>
          <p>${totalIncome}</p>
        </div>
        <div className="summary-card expense">
          <h5>Total Expense</h5>
          <p>${totalExpense}</p>
        </div>
        <div className="summary-card net">
          <h5>Net Balance</h5>
          <p>${net}</p>
        </div>
      </div>

      {/* Sort + Clear Bar */}
      <div className="sort-bar">
        <div>
          <span>Sort by: </span>
          <select value={sortType} onChange={e => setSortType(e.target.value)}>
            <option value="asc">Lowest Amount</option>
            <option value="desc">Highest Amount</option>
          </select>
        </div>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <div className="expense-grid">
        {sortedExpenses.length === 0 ? (
          <p className="no-data">No expenses added yet</p>
        ) : (
          sortedExpenses.map(e => {
            const percentage = totalIncome
              ? ((e.amount / totalIncome) * 100).toFixed(1)
              : 0;

            return (
              <div className="expense-card" key={e.id}>
                <div className="progress-container">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: '#1abc9c',
                      textColor: '#333',
                      trailColor: '#eee',
                      textSize: '30px',
                    })}
                  />
                </div>
                <div className="expense-info">
                  <h6>{e.category}</h6>
                  <p>${e.amount}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BudgetList;
