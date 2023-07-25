import React from 'react'
import styles from './Level.module.css'
import { useRef, useState, useEffect} from 'react';

export const Course = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number | undefined>(0)
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [scroll, setScroll] = useState(false)

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

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    if(windowSize.innerWidth > 1000){
      console.log('big screen')
      if( width && width > 546){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }else{
      console.log('small screen')
      const devicewidth = windowSize.innerWidth
      const containerWidth = 0.9 * devicewidth
      const actualDivwidth = 0.75 * containerWidth
      if(width && width > actualDivwidth){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
  }, [windowSize.innerWidth, width])

  
  console.log(scroll)
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
