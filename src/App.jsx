
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

import data from './data';
import Category from './components/Category';

function App() {


  const allCategories = ['all', ...new Set(data.map((item) => item.category))];
  console.log(allCategories);

  const [menuItem, setMenuItem] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {

    if (category === 'all') {
      setMenuItem(data);
      return;
    }

    let filterCategory = data.filter((item) => {
      return item.category === category;
    });

    setMenuItem(filterCategory);
  }


  return (
    <>
    <h3>Menu Project</h3>
    <div className="underline"></div>
        {/* <button className="btn allBtn" onClick={() => filterItems('all')}>All</button>
        <button className="btn breakfastBtn" onClick={()=> filterItems('breakfast')}>Breakfast</button>
        <button className="btn lunchBtn" onClick={()=> filterItems('lunch')}>Lunch</button>
        <button className="btn dinnerBtn" onClick={()=> filterItems('shakes')}>Dinner</button> */}
        <Category categories={categories} filterItems={filterItems} />

    {
      menuItem.map((item) => {
        return (
          
           <Menu menuItem={item} key={item.id} />
        )
      })
    }
    </>
    
  
  )
  
    
 
}

export default App;
