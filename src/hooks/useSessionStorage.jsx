import { useState } from "react";

function setTimeToLive(lifespan) {
  let currentTime = new Date().getTime();

  let timeToLive;
  
  if (lifespan !== 0) {
    timeToLive = currentTime + lifespan;
  } else {
    timeToLive = 0; // Lifespan is now infinite and dependent only browser
  }
  return timeToLive;

};

function evaluateTimeToLive(timestamp) {
 
  let currentTime = new Date().getTime();
  if (currentTime <= timestamp || timestamp === 0) {
    return true;
  } else {
    return false;
  }

};

export const useSessionStorage = (keyName, defaultValue, expiration) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        let item = JSON.parse(value);
        let time = evaluateTimeToLive(item.timestamp);
        if (time) {
          return item.value;
        } else {
          window.localStorage.removeItem(keyName);

          window.localStorage.setItem(keyName, JSON.stringify({
            'timestamp': setTimeToLive(1800000),//1800000
            'value': defaultValue
           }));

          return defaultValue;
        }
      } else {
        window.localStorage.setItem(keyName, JSON.stringify({
          'timestamp': setTimeToLive(1800000),
          'value': defaultValue
         }));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify({
        'timestamp': setTimeToLive(1800000),
        'value': newValue
       }));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};