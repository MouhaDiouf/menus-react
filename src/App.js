import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.catagory === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
