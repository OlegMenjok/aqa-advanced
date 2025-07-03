function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

const handleNum = function (num, evenCallback, oddCallback) {
  if (num % 2 == 0) {
    evenCallback();
    return;
  }
  oddCallback();
};

handleNum(40, handleEven, handleOdd);
handleNum(41, handleEven, handleOdd);
