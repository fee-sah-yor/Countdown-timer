import React, { useEffect, useState} from "react";

function App() {
  // ===TO SET THE VALUES FOR THE CALCULATION
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  // CREATE STATE MANAGEMENT FOR EACH TIME VARIANCE
  const [timeDays, setTimeDays] = useState(0);
  const [timeHrs, setTimeHrs] = useState(0);
  const [timeMin, setTimeMin] = useState(0);
  const [timeSecs, setTimeSecs] = useState(0);

  // TO HOLD VALUE FOR NEW DATE INPUT
 const [date, setDate] = useState('')
 const [newDate, setNewDate] = useState('')
//  const handleChange = (e) => {
//   const { name, value } = e.target
//   setDate((prev) => ({
//       ...prev, [name]: value
//   }))
// };

  const handleSubmit = (e) => {
    e.preventDefault()
   console.log(date)
   setDate('')
   setNewDate(...newDate, date)
  };


  useEffect(() => {
    const countdownInterval = setInterval(() => {

      // TO CALULATE DIFFERENCE BETWEEN CURRENT DATE AND END DATE
      const endDate = new Date(newDate).getTime()
      const now = new Date().getTime()
      const difference = endDate - now
      // const endDate = new Date(date).getTime();
      // const now = new Date().getTime();
      // const difference = endDate - now;

      let newTimeDays = Math.floor(difference / days);
      let newTimeHrs = Math.floor((difference % days) / hours);
      let newTimeMin = Math.floor((difference % hours) / minutes);
      let newTimeSecs = Math.floor((difference % minutes) / seconds);

      newTimeHrs = newTimeHrs < 10 ? "0" + newTimeHrs : newTimeHrs;
      newTimeMin = newTimeMin < 10 ? "0" + newTimeMin : newTimeMin;
      newTimeSecs = newTimeSecs < 10 ? "0" + newTimeSecs : newTimeSecs;

      setTimeDays(newTimeDays);
      setTimeHrs(newTimeHrs);
      setTimeMin(newTimeMin);
      setTimeSecs(newTimeSecs);

      if (difference <= 0) {
        // Countdown has ended, do something here if needed
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [days, hours, minutes, seconds, newDate]); // The empty dependency array makes sure this effect runs only once on mount

  return (
    <>
      <div>
        <div className="absolute">
          <img
            src="/images/bg-stars.svg"
            alt="stars"
            className="w-screen min-h-[70vh]"
          />
        </div>

        <div className="relative">
          <div className="min-h-[70vh] mt-6 flex flex-col items-center justify-center space-y-6">
            <div className="text-white text-center uppercase font-bold text-xl tracking-[0.7rem] mb-[40px]">
              We're launching soon
            </div>

            {/*============== date input ====================*/}
            <form>
              <div className="space-x-4">
                <label htmlFor="launch" className="text-white">
                  Launch Date :
                </label>
                <input value={date}
                  name="launch"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  className="transparent px-3 py-1 rounded-sm"
                />
                {/* ==================SUBMIT BUTTON===== */}
                <button type="submit" className="btn"  onClick={handleSubmit}>
                  Enter
                </button>
              </div>
            </form>

            {/* COUNTDOWN DISPLAY */}
            <ul className="flex items-center justify-between gap-5 text-center">
              <li>
                <h3 className="countdown">{timeDays ? timeDays : '00'}</h3>
                <p className="count-text">Days</p>
              </li>
              <li>
                <h3 className="countdown">{timeHrs ? timeHrs: '00'}</h3>
                <p className="count-text">Hours</p>
              </li>
              <li>
                <h3 className="countdown">{timeMin ? timeMin : '00'}</h3>
                <p className="count-text">Minutes</p>
              </li>
              <li>
                <h3 className="countdown">{timeSecs ? timeSecs : '00'}</h3>
                <p className="count-text">Seconds</p>
              </li>
            </ul>
          </div>

          {/* <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Your Name Here
            </a>
            .
          </div> */}
        </div>

        {/* <div className="absolute bottom-[40px] z-[999] left-[33%] md:left-[45%]">
          <ul className="flex items-center justify-between gap-6">
            <li>
              <img src="/images/icon-facebook.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon-pinterest.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon-instagram.svg" alt="" />
            </li>
          </ul>
        </div> */}

        <div className="absolute bottom-0 ">
          <img
            src="/images/pattern-hills.svg"
            alt="hills"
            className="w-screen min-h-[20vh]"
          />
        </div>
      </div>
    </>
  );
}

export default App;
