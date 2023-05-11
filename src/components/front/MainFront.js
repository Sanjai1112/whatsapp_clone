import React from 'react';
import Main from '../main/Main';
import Side from '../side/Side';

function MainFront() {
    return (
        <div className='main_front-root' id = "main_front-root">
            <Side/>
            <Main/>
        </div>
    );
}

export default MainFront;
