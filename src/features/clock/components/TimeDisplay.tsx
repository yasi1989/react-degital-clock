type TimeDisplayProps = {
  hours: string;
  minutes: string;
  seconds: string;
};

const TimeDisplay = ({ hours, minutes, seconds }: TimeDisplayProps) => {
  return (
    <div className="text-6xl">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default TimeDisplay;
