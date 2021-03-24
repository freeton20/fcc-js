var count = 0;

function cc(card) {
  // Only change code below this line
  let counter = {
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 0,
    8: 0,
    9: 0,
    10: -1,
    "J": -1,
    "Q": -1,
    "K": -1,
    "A": -1
  }
  count += counter[card];
  let advice = count > 0 ? "Bet" : "Hold";
  return count + " " + advice;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');