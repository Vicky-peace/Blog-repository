import React from 'react';
import './Title.css';

const Title = (props) => {
    const { title } = props;
  
    return (
      <div className="title-container">
        <h1 className="title">{title}</h1>
      </div>
    );
  };
  
  export default Title;