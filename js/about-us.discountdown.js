const countdown = document.querySelector(".discountdown");
setInterval(() => renderCountdown(countdown), 1000);

function renderCountdown(countdown) {
  countdown.innerHTML = formatCountdown();
}

function formatCountdown() {
  const time = humanizeRemainingTime();
  const days = time.days;
  const hours = time.hours.length < 2 ? "0" + time.hours : time.hours;
  const minutes = time.minutes.length < 2 ? "0" + time.minutes : time.minutes;
  const seconds = time.seconds.length < 2 ? "0" + time.seconds : time.seconds;
  return `50% DISCOUNT ON FIRST CONSULTATION:<br><span class="countdown-span">${days} Days ${hours}:${minutes}:${seconds}</span>`;
}

function humanizeRemainingTime() {
  const timeLeft = setDiscount();
  const daysLeft = milisecsToDays(timeLeft);
  const hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
  const minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
  const secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;
  return {
    days: String(Math.floor(daysLeft)),
    hours: String(Math.floor(hoursLeft)),
    minutes: String(Math.floor(minutesLeft)),
    seconds: String(Math.floor(secondsLeft)),
  };
}

function setDiscount(startDay = 24) {
  const discountDuration = 7;
  const startDate = new Date(2024, 5, startDay).getTime();
  const endDate = new Date(2024, 5, startDay + discountDuration).getTime();
  const now = new Date().getTime();
  if (now >= endDate) {
    return setDiscount(
      startDay +
        Math.floor(milisecsToDays(now - startDate) / discountDuration) *
          discountDuration
    );
  } else {
    return endDate - now;
  }
}

function milisecsToDays(milisecs) {
  return milisecs / 1000 / 60 / 60 / 24;
}
