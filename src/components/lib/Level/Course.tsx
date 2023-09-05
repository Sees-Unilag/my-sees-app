import React from 'react'
import styles from './Level.module.css'
import { useRef, useState, useEffect} from 'react';

export const Course = () => {
  // ref for the course container
  const ref = useRef<HTMLDivElement>(null);
// state reprensenting the width of course container
  const [width, setWidth] = useState<number | undefined>(0)
  // state reperensenting the size of the window
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // state for implementing scroll animation based on whether course name width is bigger than that of its parent div.
  const [scroll, setScroll] = useState(false)
// getting window width on screen REsize 
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      setWidth(ref.current?.clientWidth)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  //get window width function
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    if(windowSize.innerWidth > 1000){
      //determing whether the width of the course name is bigger than that of its parent container for desktop screen.
      if( width && width > 546){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }else{
      //determing whether the width of the course name is bigger than that of its parent container for mobile screen.
      const devicewidth = windowSize.innerWidth
      const containerWidth = 0.9 * devicewidth
      // determing parent div width
      const actualDivwidth = 0.75 * containerWidth
      if(width && width > actualDivwidth){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
  }, [windowSize.innerWidth, width])

  return (
    <div className={`d-flex justify-content-between align-items-center ${styles.courseContainer}`}>
     <div className={`${styles.courseNameDiv}`} >
      <div className={`${styles.courseNameContainer} ${ scroll ? styles.scroll : ''}`} ref={ref}>
        <h3 className={`${styles.courseName}`} >GEG 117- POWER SYSTEMS PLANNING, DESIGN AND EQUIPMENT</h3>
      </div> 
     </div>
     <div className={`${styles.courseUnitDiv}`}>
      <h5 className={`${styles.courseUnit}`}>2</h5>
     </div>
    </div>
  )
}
