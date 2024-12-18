export const formatDate = (myTime: Date) => {
  const year = myTime.getFullYear().toString();
  const month = myTime.getMonth().toString().padStart(2, "0");
  const day = myTime.getDay().toString().padStart(2, "0");
  const week = getDayOfWeek(myTime);
  const hours = myTime.getHours().toString().padStart(2, "0");
  const minutes = myTime.getMinutes().toString().padStart(2, "0");
  const seconds = myTime.getSeconds().toString().padStart(2, "0");
  return { year, month, day, week, hours, minutes, seconds };
};

export const getDayOfWeek = (myTime: Date) => {
  const weeks = ["日", "月", "火", "水", "木", "金", "土"];
  return weeks[myTime.getDay()];
};
