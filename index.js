// Code your solutions in this file

function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
    return messages;
  }

function countDown(){
    let countDownn = 10;
    while (countDownn >= 0){
        console.log(countDownn--);
    }
    return countDownn
}

