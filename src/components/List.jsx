import React from 'react';
import './List.css';

const List = ({ id, label }) => {
  return (
    <div className="checkbox-wrapper-15">
      <input className="inp-cbx" id={id} type="checkbox" style={{ display: 'none' }} />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default List;