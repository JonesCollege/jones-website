import React from 'react';

const lineStyle = {
    height: '8px',
    width: '100%',
    background: '#CDE5F1', 
    position: 'absolute',
    left: '50%', 
    transform: 'translateX(-50%)',
    bottom: '130px',
  };

function Lines() {
    return (
        <div>
            <div style={lineStyle}></div>
            <div style={{ ...lineStyle, backgroundColor: '#F7F2FF', bottom: '110px' }}></div>
            <div style={{ ...lineStyle, backgroundColor: '#F3F8F4', bottom: '90px' }}></div>
        </div>
    )
}

export default Lines