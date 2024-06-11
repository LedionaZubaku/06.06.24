import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import VideoBg from '../src/assets/videoplayback.mp4';
import './styles.css';


const App=() =>{
  return <section className='page'>
    { /* overlay */ }
    <div className="overlay"></div>
    {/*video */}
    <video src={VideoBg}autoPlay Loop muted></video>
    { /*content */}
    <div className="page__content">
      <h1>Cooming Soon</h1>
      <h3>Leave your email and we'll let you know once the site goes live.</h3>
      {/* clock */}
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        className='flip-clock'
        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
        digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
        dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: 'red', size: '6px' }}
        duration={0.5}
      />
      {/*button*/}
      <button className="btn">Notify Me </button>
    </div>
  </section>
}

export default App;