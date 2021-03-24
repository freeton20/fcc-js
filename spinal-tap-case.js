function spinalCase(str) {
    str = str.split(/_|\s|-|(?=[A-Z])/).join("-").toLowerCase();
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));