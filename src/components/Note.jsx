import React from 'react';
import '../styles/Note-styles.css';

function Note (){
    return (
        <div className='note-container'>
            <div className='note'>
                <h1>This is the title</h1>
                <p>This is the content</p>
            </div>
        </div>
    )
};

export default Note;