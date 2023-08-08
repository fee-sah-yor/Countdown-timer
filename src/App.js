import React, { useEffect, useState } from 'react';

function App() {
 
    const endDate = new Date('August 30, 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const difference = endDate - now 

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    const[timeDays, setTimeDays] = useState(0);
    const[timeHrs, setTimeHrs] = useState(0);
    const[timeMin, setTimeMin] = useState(0);
    const[timeSecs, setTimeSecs] = useState(0);

  let newTimeDays =  Math.floor(difference/days)
    let newTimeHrs =  Math.floor((difference % days)/hours)
     let newTimeMin =  Math.floor((difference % hours)/minutes)
     let newTimeSecs =  Math.floor((difference % minutes)/seconds)

     newTimeHrs = newTimeHrs < 10 ? '0' + newTimeHrs : newTimeHrs
     newTimeMin = newTimeMin < 10 ? '0' + newTimeMin : newTimeMin
     newTimeSecs = newTimeSecs < 10 ? '0' + newTimeSecs : newTimeSecs
     
     useEffect(() => {
       const countdown = () => {
         setTimeDays(newTimeDays);
               setTimeHrs(newTimeHrs);
               setTimeMin(newTimeMin);
               setTimeSecs(newTimeSecs);
       }
       setInterval(countdown,1000)
},[days,hours,minutes,seconds])

  // const seconds = 1000;
  // const minutes = seconds * 60;
  // const hours = minutes * 60;
  // const days = hours * 24;
  
  // const [timeDays, setTimeDays] = useState(0);
  // const [timeHrs, setTimeHrs] = useState(0);
  // const [timeMin, setTimeMin] = useState(0);
  // const [timeSecs, setTimeSecs] = useState(0);
  
  // useEffect(() => {
  //   const countdownInterval = setInterval(() => {
  //       const endDate = new Date('August 30, 2023 00:00:00').getTime();
  //       const now = new Date().getTime();
  //       const difference = endDate - now;
  
  //       let newTimeDays = Math.floor(difference / days);
  //       let newTimeHrs = Math.floor((difference % days) / hours);
  //       let newTimeMin = Math.floor((difference % hours) / minutes);
  //       let newTimeSecs = Math.floor((difference % minutes) / seconds);
  
  //       newTimeHrs = newTimeHrs < 10 ? '0' + newTimeHrs : newTimeHrs
  //       newTimeMin = newTimeMin < 10 ? '0' + newTimeMin : newTimeMin
  //       newTimeSecs = newTimeSecs < 10 ? '0' + newTimeSecs : newTimeSecs

  //       setTimeDays(newTimeDays);
  //       setTimeHrs(newTimeHrs);
  //       setTimeMin(newTimeMin);
  //       setTimeSecs(newTimeSecs);
  
  //       if (difference <= 0) {
  //         // Countdown has ended, do something here if needed
  //         clearInterval(countdownInterval);
  //       }
  //     }, 1000);
  
    //   return () => {
    //     clearInterval(countdownInterval);
    //   };
    // }, [days,hours,minutes,seconds]); // The empty dependency array makes sure this effect runs only once on mount
  
  return (
    <>
      <div>

        <div className="absolute">
          <img src='/images/bg-stars.svg' alt="stars" className="w-screen" />
        </div>

        <div>
          <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-9">
            <div className="text-white uppercase font-bold text-xl tracking-[0.7rem] mb-[50px]"> 
            We're launching soon</div>

            <ul className="flex items-center justify-between gap-5 text-center">
            <li >
              <h3 className="countdown">{timeDays}</h3>
              <p className="count-text">Days</p>
            </li>
            <li>
              <h3 className="countdown">{timeHrs}</h3>
              <p  className="count-text">Hours</p>
            </li>
            <li>
              <h3 className="countdown">{timeMin}</h3>
              <p  className="count-text">Minutes</p>
            </li>
            <li>
              <h3 className="countdown">{timeSecs}</h3>
              <p  className="count-text">Seconds</p>
            </li>
            </ul>

            </div>

            <div class="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
              Coded by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Your Name Here</a>.
            </div>
        </div>


        <div className="absolute bottom-[40px] z-[999] left-[50%]">
          <ul className="flex items-center justify-between gap-6">
            <li><img src="/images/icon-facebook.svg" alt="" /></li>
            <li><img src="/images/icon-pinterest.svg" alt="" /></li>
            <li><img src="/images/icon-instagram.svg" alt="" /></li>
          </ul>
        </div>

        <div className="absolute bottom-0">
          <img src='/images/pattern-hills.svg' alt="hills" className="w-screen" />
        </div>
      </div>
      </>

  );
}

export default App;
