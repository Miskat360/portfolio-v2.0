import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

export default function index({children, btnsize, fill, backgroundColor="#334BD3", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])

  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic points={0.5}>
      <div className={`${fill === true ? styles.fillButton: styles.roundedButton} overflow-hidden`} style={{width: btnsize, height: btnsize}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={fill ? styles.fill : styles.circle}></div>
      </div>
    </Magnetic>
  )
}