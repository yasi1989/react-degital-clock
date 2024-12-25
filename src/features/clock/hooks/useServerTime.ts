import { useEffect, useState } from "react";
import feachDateTime from "../api/fetchTime";

const useServerTime = () => {
  const [myTime, setMyTime] = useState<Date | null>(null);
  useEffect(() => {
    const syncData = async () => {
      const time = await feachDateTime();
      if (time) {
        setMyTime(time);
      } else {
        console.error("サーバ同期に失敗しました。");
      }
    };

    syncData();

    const intervalId = setInterval(() => {
      setMyTime((prev) => {
        if (!prev) return new Date();
        return new Date(prev?.getTime() + 1000);
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return myTime;
};

export default useServerTime;
