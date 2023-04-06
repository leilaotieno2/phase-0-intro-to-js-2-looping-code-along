// Code your solutions in this file
function writeCards(namesArray, event) {
  const thankYouMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
    thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

