import React,{useRef,useEffect, useCallback} from 'react';
import Search from '../search/Search';

function Side() {
    const sideRootref = useRef(null);
    const resizerRef = useRef(null);

    const resize = (e) =>{
        const {left} = document.getElementById("main_front-root")?.getBoundingClientRect();
        sideRootref.current.style.width = (e.clientX - left) + "px";
    }

    const mousedownMemoized = useCallback((e) => {
        document.addEventListener('mousemove',resize,false)}
    ,[]);

    const mouseupMemoized = useCallback((e) => {
        document.removeEventListener('mousemove',resize,false)}
    ,[]);

    useEffect(()=>{
        const resizerRefCurrent = resizerRef?.current;
        if(resizerRefCurrent){
            resizerRefCurrent.addEventListener('mousedown',mousedownMemoized,false);

            document.addEventListener('mouseup',mouseupMemoized,false);

            return () => {
                resizerRefCurrent.removeEventListener('mousedown',mousedownMemoized);
            }
        }
    },[mousedownMemoized, mouseupMemoized]);

    return (
        <div className='side_root' ref={sideRootref}>
            <span className='resizer vertical' ref={resizerRef}></span>
            <Search/>
        </div>
    );
}

export default Side;
