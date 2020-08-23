import React from 'react';
import AddBill from './AddBill';
import AddCategory from './AddCategory';
import BillsTable from './BillsTable';
import Chart from './Chart';
import NavBar from './NavBar';

const  App = () => {
  return (
    <div>
      <AddBill />
      <AddCategory />
      <BillsTable />
      <Chart />
      <NavBar />
    </div>
  );
}

export default App;
