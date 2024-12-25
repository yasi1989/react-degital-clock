type DateDisplayProps = {
  year: string;
  month: string;
  day: string;
  week: string;
};

const DateDisplay = ({ year, month, day, week }: DateDisplayProps) => {
  return (
    <div className="text-lg flex justify-end pr-1">
      {year}/{month}/{day} ({week})
    </div>
  );
};

export default DateDisplay;
