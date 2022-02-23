export const getDataWeatherApi = async (city) => {
  try {
    return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf35cac91880cb98375230fb443a116f`)
    .then(res => {
      if(res.ok) {
        return res.json()
      } else throw new Error('Something wrong..')
    })
  } catch (e) {
    console.log(e.message);
  }
}