import SimpleTimer from './BasicTimer/SimpleTimer';
import Weather from './WeatherApp/Weather';
import Reminder from './ReminderApp/Reminder';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='BasicTimer'>
        <SimpleTimer />
      </div>
      <div className='Weather-App'>
        <Weather />
      </div>
      <div className='Reminder-App'>
        <Reminder />

      </div>
    </div>
  );
}

export default App;
