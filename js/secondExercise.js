const weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

function getDayInfo(date) {
  const [days, month, year] = date.split('.').map((x) => Number(x));
  const _date = new Date(year, month - 1, days - 1);

  const week = Math.ceil(days / 7);

  console.log(
    `${weekdays[_date.getDay()]}, ${week} неделя ${
      months[_date.getMonth()]
    } ${_date.getFullYear()} года`,
  );
}

getDayInfo('15.12.2022');
