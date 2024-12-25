const feachDateTime = async (): Promise<Date | null> => {
  try {
    const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    if (res.ok) {
      const data = await res.json();
      const datetime = new Date(data.datetime);
      console.log(`サーバ同期に成功：${datetime}`);
      return datetime;
    } else {
      console.error(`サーバ同期に失敗しました status：${res.status}`);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default feachDateTime;
