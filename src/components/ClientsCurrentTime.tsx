import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ClientsCurrentTimeAction } from "../../redux/ClientsCurrentTime";

export const ClientsCurrentsTime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //CLIENT TIME - UPDATES EVERY 60 SECONDS
    const getClientTime = () => {
      let dateAndTime: Date = new Date();
      let currentHour: number = dateAndTime.getHours();
      let currentMinutes: string = dateAndTime.getMinutes().toString();
      currentMinutes = ("0" + currentMinutes).slice(-2);
      let watchTimeAndMinutes: string = `${currentHour}:${currentMinutes}`;
      dispatch(ClientsCurrentTimeAction(watchTimeAndMinutes));
    };
    // FIRE ONCE ON PAGE LOAD
    getClientTime();
    // THEN AFTER FIRE EVERY 60 SECONDS
    const intervalId = setInterval(() => {
      getClientTime();
    }, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return <></>;
};
