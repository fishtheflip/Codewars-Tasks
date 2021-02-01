//How to get the difference (in days) between two dates?

const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

// Example
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9