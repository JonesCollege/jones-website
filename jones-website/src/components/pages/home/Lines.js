import React from 'react';
import './Lines.css';

const lineStyle = {
    height: '8px',
    width: '100%',
    background: '#CDE5F1', 
    position: 'absolute',
    top: '15px',
  };

function Lines() {
    return (
        <div className="lines-container">
            <div style={lineStyle}></div>
            <div style={{ ...lineStyle, backgroundColor: '#F7F2FF', top: '38px' }}></div>
            <div style={{ ...lineStyle, backgroundColor: '#F3F8F4', top: '61px' }}></div>
        </div>
    )
}

export default Lines