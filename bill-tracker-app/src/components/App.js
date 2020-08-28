import React, { useState, useEffect } from 'react';
import AddBill from './AddBill';
import AddCategory from './AddCategory';
import BillsTable from './BillsTable';
import Chart from './Chart';
import NavBar from './NavBar';

const  App = () => {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false);
  const [categories, setCategories] = useState([]);

  const addCategory = category => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)
    setShouldShowAddCategory(false)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
  }

  const showAddCategory = () => {
    setShouldShowAddCategory(true);
  }

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem('categories')
    );

    if (categoriesInLocalStorage !== categories) {
      setCategories(categoriesInLocalStorage)
    }

    if(!categoriesInLocalStorage) {
      setShouldShowAddCategory(true);
    }
  }, []);

  return (
    <div className="App">
      {
        shouldShowAddCategory ? (
           <AddCategory onSubmit={addCategory}/> 
           ) : (
            <div>
              <NavBar 
                categories={categories}
                showAddCategory={showAddCategory}
                />
              <div className="container flex">
                <div className="w-1/2">
                  <BillsTable />
                </div>
                <div className="w-1/2">
                  <Chart />
                </div>
              </div>
            </div>
           )
      }
    </div>
  );
}

export default App;
