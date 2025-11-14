import { createSlice } from '@reduxjs/toolkit';

const loadData = () => {
  try {
    const stored = localStorage.getItem('budgetData');
    return stored ? JSON.parse(stored) : { incomes: [], expenses: [] };
  } catch (e) {
    console.error("Failed to load from localStorage:", e);
    return { incomes: [], expenses: [] };
  }
};

const saveData = (state) => {
  try {
    localStorage.setItem('budgetData', JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
};

const initialState = loadData();

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.incomes.push(action.payload);
      saveData(state);
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      saveData(state);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(e => e.id !== action.payload);
      saveData(state);
    },
    clearAll: (state) => {
      state.incomes = [];
      state.expenses = [];
      saveData(state);
    }
  },
});

export const { addIncome, addExpense, removeExpense, clearAll } = budgetSlice.actions;
export default budgetSlice.reducer;
