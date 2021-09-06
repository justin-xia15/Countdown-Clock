let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); // to get seconds
    // check if it needs to stop
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    console.log(secondsLeft);
  }, 1000);
}
