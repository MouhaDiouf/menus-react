import React from 'react';

function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, idx) => {
        return (
          <button
            type="button"
            key={idx}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
