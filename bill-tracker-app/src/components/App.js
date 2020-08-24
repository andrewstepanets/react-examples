import React from 'react';
import AddBill from './AddBill';
import AddCategory from './AddCategory';
import BillsTable from './BillsTable';
import Chart from './Chart';
import NavBar from './NavBar';

const  App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container flex">
        <div className="w-1/2">
          <BillsTable />
        </div>
        <div className="w-1/2">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
