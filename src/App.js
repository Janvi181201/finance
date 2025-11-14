import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpense from './components/AddExpense';
import BudgetList from './features/BudgetList';
import AddIncome from './components/AddIncome';

function App() {
  return (
    <div className="App">
      <div className="container py-4">
        <h2 className="mb-4 text-center">Finance Tracker</h2>
        <div className="row mt-5">
          <div className="col-md-4">
            <AddExpense/>
            <AddIncome />
          </div>
          <div className="col-md-8">
            <BudgetList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
