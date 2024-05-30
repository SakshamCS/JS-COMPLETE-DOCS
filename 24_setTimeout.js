// setTImeout() = function in Javascript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are apporximate (varies based on the workload of the Javascript runtime env.)

// setTimeout(callback, delay);
// clearTImeout(timeoutId) = can cancel a timout before it triggers

// function sayHello() {
//   window.alert('Hello');
// }

// setTimeout(sayHello, 3000);
// setTimeout(function () {
//   window.alert('Hello');
// }, 3000);

// const timeoutId = setTimeout(() => window.alert('Hello'), 3000);

// clearTimeout(timeoutId);

function startTimer() {
  timeoutId = setTimeout(() => window.alert('Hello'), 3000);
  console.log('STARTED');
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log('CLEARED');
}
