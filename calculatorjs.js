const cal = [];

function x(num) { // num = "-" // num = "+" // num = "5" // num = ""

  // if current value is an operation, and the button clicked is a number
  // push current operation to array
  // replace display with number clicked
  document.getElementById("calculation").value

  /*
  -> 1 = if 
        1.1 = if
          1.1.1 = if
          1.1.2 = else
        1.2 = else
  or
  2 = else
  */

  // if a number is clicked
  if (
    num == 0 ||
    num == 1 ||
    num == 2 ||
    num == 3 ||
    num == 4 ||
    num == 5 ||
    num == 6 ||
    num == 7 ||
    num == 8 ||
    num == 9
  ) {
    document.getElementById("calculation").value += num;
  } else {
    // if not number is clicked
    
    // push the previous number into an array to save it
    // until length is equals to 2;
    /*
        check array length the moment you click operation until array length is equals to 2
        then replace the operation on the second array with the most current
    */
    if (cal.length == 2) {
      cal[1] = num;
    } else if (cal.length <= 2) {
      cal.push(document.getElementById("calculation").value)
    }
    
    // before pushing value to array
    // check array length if greater than 2 don't add to array replace current operation with 
    console.log(cal)

    // [1, + ,1]
    // arr[0] arr[1] arr[2]

    // 12 + 15

    // replace displayed value on calculation to the operation
    document.getElementById("calculation").value = num;
  }

}
function erase() {
  document.getElementById("calculation").value = "";
}
function backspace() {
  document.getElementById("calculation").value = document
    .getElementById("calculation")
    .value.slice(0, -1);
}

/* 
  !!if number, operation, number, then another operation, first 2 numbers and operation will be calculated


  from beginning

  show clicked button number on screen
      if another number is clicked, concatenate to existing number adding to the end

  when operation is clicked after a number
      remove number from screen
      check what operation
          depending on operation, show operation in screen
          if another operation is clicked
              override current operation with the last operation clicked
              // ignore logic when equals is clicked after an operation is clicked


  when another number is clicked after an operation
      remove operation in screen
      show number
          if another number is clicked, concatenate to existing number adding to the end

  when equals is click
      remove last number
      show result
*/

if (cal.length == 0) {
  document.getElementById("calculation").value += num;
}