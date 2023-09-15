import React from 'react'
import styles from './Level.module.css'
import { useRef, useState, useEffect, useCallback} from 'react';
import aniStyles from './animation.module.css'

export const Course = () => {
    // state reprensenting the course name container
  const [ containerWidth, setContainerWidth ] = useState(0) 
  // state reprensenting the width of course container
  const [width, setWidth] = useState(0)
  // state reperensenting the size of the window
  const [windowWidth, setWindowWidth] = useState(getWindowSize());
  // state for implementing scroll animation based on whether course name width is bigger than that of its parent div.
  const [scroll, setScroll] = useState(false)
  const [scrollAni, setScrollAni] = useState('')
  // getting window width on screen REsize 
  useEffect(() => {
    if(width > containerWidth){
      const diff = width - containerWidth
      // rounding up to a whole figure
      const wholeDiff = Math.round(diff)
      const scrollBy = wholeDiff + 30
      const scrollPercent = (scrollBy/width) * 100
      setScroll(true)
      const aniType = determineAni(scrollPercent)
      setScrollAni(aniType)
    }else{
      setScroll(false)
    }
    function handleWindowResize() {
      setWindowWidth(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [containerWidth]);

  //get window width function
  function getWindowSize() {
    const {innerWidth} = window;
    return innerWidth;
  }
  
  const measuredWidthRef = useCallback((node: HTMLDivElement) => {
    if(node !== null){
      setWidth(node.getBoundingClientRect().width)
    }
  }, [windowWidth])

  const measuredContainerRef = useCallback((node: HTMLDivElement) => {
    if(node !== null){
      const containerWidth = node.getBoundingClientRect().width
      const actualConatinerWidth = containerWidth-10
      setContainerWidth(actualConatinerWidth)
    }
  }, [windowWidth])

  function determineAni(percent: number):string{
    if(percent <= 5 ){
      return aniStyles.scroll0_5
    }else if(percent <= 10){
      return aniStyles.scroll1
    }else if(percent <= 15){
      return aniStyles.scroll1_5
    }else if(percent <= 20){
      return aniStyles.scroll2
    }else if(percent <= 25){
      return aniStyles.scroll2_5
    }else if(percent <= 30){
      return aniStyles.scroll3
    }else if(percent <= 35){
      return aniStyles.scroll3_5
    }else if(percent <= 40){
      return aniStyles.scroll4
    }else if(percent <= 45){
      return aniStyles.scroll4_5
    }else if(percent <= 50){
      return aniStyles.scroll5
    }else if(percent <= 55){
      return aniStyles.scroll5_5
    }else if(percent <= 60){
      return aniStyles.scroll6
    }else if(percent <= 65){
      return aniStyles.scroll6_5
    }else if(percent <= 70){
      return aniStyles.scroll7
    }else{
      return aniStyles.scroll7_5
    }
  }
  
  return (
    <div className={`d-flex justify-content-between align-items-center ${styles.courseContainer}`}>
     <div ref={measuredContainerRef} className={`${styles.courseNameDiv}`} >
      <div ref={measuredWidthRef} className={`${styles.courseNameContainer} ${ scroll ? scrollAni : ''}`} >
        <h3 className={`${styles.courseName}`} >EEG 560 - Reliability & Maintainability of E/E Components and Systems</h3>
      </div> 
     </div>
     <div className={`${styles.courseUnitDiv}`}>
      <h5 className={`${styles.courseUnit}`}>2</h5>
     </div>
    </div>
  )
}
