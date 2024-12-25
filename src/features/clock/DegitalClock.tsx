import { formatDate } from "../../utils/formatTime";
import DateDisplay from "./components/DateDisplay";
import TimeDisplay from "./components/TimeDisplay";
import useServerTime from "./hooks/useServerTime";

const DegitalClock = () => {
  const myTime = useServerTime() ?? new Date();
  const { year, month, day, week, hours, minutes, seconds } =
    formatDate(myTime);

  return (
    <div className="bg-gray-50 p-32 text-3xl focus:outline-none rounded-lg">
      <div className="space-y-1 flex flex-col font-mono">
        <TimeDisplay hours={hours} minutes={minutes} seconds={seconds} />
        <DateDisplay year={year} month={month} day={day} week={week} />
      </div>
    </div>
  );
};

export default DegitalClock;
