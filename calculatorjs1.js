let o = document.getElementById("calculation");
const cal = [];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["*", "+", "-", "/"]


function calculate(arithmetic) {
    /* first argument - if number is pressed first, keep concatenating until operation is pressed. 
                        if operation is pressed first, do nothing and this includes not to store anything in array */
    if (cal.length == 0 || cal.length == 1) {
        if (numbers.includes(arithmetic)) {
            o.value += arithmetic;
            console.log(o.value);
        }
    }

    // store the concatenated number as first number [0] until operation is pressed. declare a variable to store it or maybe assign it to cal[0] before starting second step?
    /* second step - if operation is pressed (after number from first argument), add the operation to cal[1] by .push() the operation to cal[1] as string
        limits the array to length = 2 and just keep replacing cal[1] with the last operation selected*/
    if (o.value != "") {
        if (operators.includes(arithmetic)) {

            if (!operators.includes(o.value)) {
                cal.push(o.value); // cal[0]
            }
            if (cal.length < 2) {
                cal.push(arithmetic); // cal[1]
                o.value = arithmetic;
            } else if (cal.length == 2) {
                cal[1] = arithmetic;
                o.value = arithmetic;
            }
        }
    }

    // end of first argument
    /* second argument - if number is pressed (after operation), add number to cal[2] by .push(), limits the array to length = 3, and just keep concatenating numbers until another operation is pressed
                        display the numbers being pressed so you can use the display numbers as your third array once another operation is pressed
                       - if operation is pressed, loop to 'second step' 
    */
    if (cal.length == 2) {
        if (numbers.includes(arithmetic)) {
            if (operators.includes(o.value)) {
                o.value = "";
                o.value += arithmetic;
            } else {
                o.value += arithmetic;
            }
        }
    }

    console.log(`o.value: ${o.value}`); //template literal
    console.log(`cal: ${cal}`);

    /*
    o.value = 1
    cal[123, *]
    user input = 2
    */


    /* third argument - if operation is pressed (after number), perform arithmetic operation by converting number string to number using parseint, operation into arithmetic operation
                      - display result, reset array length, save result as first array, save the current pressed operation on the second array and reduce the array length to 2
                      - loop the code from second step
                      - break the loop if number is pressed and make it loop from first argument instead
    */



}


// clears both the display and array
function erase() {
    o.value = "";
    cal.length = 0;
}


// removes last number
function backspace() {
    o.value = o.value.slice(0, -1);
}


function result() {
    if (cal.length == 0) {
        o.value = o.value;
    }
    if (cal.length == 1) {
        o.value = o.value;
    }
    if (cal.length == 2) {
        cal.push(o.value);
        if (cal.length == 3) {
            if (cal[1] == "+") {     
                o.value = parseInt(cal[0]) + parseInt(cal[2]);
            } else if (cal[1] == "-") {
                o.value = parseInt(cal[0]) - parseInt(cal[2]);
            } else if (cal[1] == "*") {
                o.value = parseInt(cal[0]) * parseInt(cal[2]);
            } else if (cal[1] == "/") {
                o.value = parseInt(cal[0]) - parseInt(cal[2]);
            }
            cal.length = 1;
            cal[0] = o.value;
        }
    }
}

/* 

Logic:
i)  if operation is pressed before any number, do nothing
ii) display numbers when you press buttons and concatenate them until operation (+, -, /, *, =) is pressed
iii)once operation is pressed, store the concatenated numbers as the first number  - display doesn't need to change
                                                                                - but another approach is to change the display with operation, then take the display as string, then convert to arithmetic operation
iv) if another operation (+, -, /, *, =) is pressed, replace the current operation without affecting the first number
    * just replace the second object/array with the new operation
v)  once another number is pressed, store the operation and keep concatenating numbers until another operation (+, -, /, *, =) is pressed
    * display the numbers being pressed so you can use the display numbers as your third array once another operation is pressed
vi) after another operation is pressed, execute operation by converting: 
                            concatenated number string to number (using parseint); 
                            operation into arithmetic operation
                            display result, reset array length, save the result as first array
                            then save the current pressed operation on the second
                            loop the code from iii) if another operation is pressed
                            break the loop if number is pressed and make it loop from i) instead                     

button extra logic:
-  clear/erase button resets all the stored numbers, operation, and display (maybe reset the array length to zero)
-  backspace only slice concatenated number and should not affect operation (make a condition)

   o.valueOf = (parseint(o.value) + parseint(o.value));
    if (num == "-") {
        o.value = (o - b);
    }
    if (num == "/") {
        o.value = (a / b);
    }
    if (num == "*"){
        o.value = (a * b);
    }
    
*/
