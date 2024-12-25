import useServerTime from "../../hooks/useServerTime";
import { formatDate } from "../../utils/formatTime";

const DegitalClock = () => {
  const myTime = useServerTime() ?? new Date();
  const { year, month, day, week, hours, minutes, seconds } =
    formatDate(myTime);

  return (
    <div className="bg-gray-50 p-32 text-3xl focus:outline-none rounded-lg">
      <div className="space-y-1 flex flex-col font-mono">
        <div className="text-6xl">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="text-lg flex justify-end pr-1">
          {year}/{month}/{day} ({week})
        </div>
      </div>
    </div>
  );
};

export default DegitalClock;
