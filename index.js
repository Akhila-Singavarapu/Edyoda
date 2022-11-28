console.log(
  "Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?"
);

function pair(arr, sum) {
  for (i = 0; i < arr.length; i++) {
    var first = arr[i];
    for (var j = i + 1; j < arr.length; j++) {
      var second = arr[j];
      if (first + second == sum) {
        console.log(first + " + " + second + " = " + sum);
      }
    }
  }
}

var arrPair = [11, 4, 10, 3, 12, 17, 8, 2];
pair(arrPair, 12);

console.log(
  "Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array."
);

// var numb_array = [1, 4, 2, 5, 7, 9, 8];
// console.log("Original Array: " + numb_array);

// numb_array.reverse();

// console.log("Reversed Array: " + numb_array);

// ----------------Method 1--------------

console.log("-----------Method 1----------");
var numb_array = [1, 4, 2, 5, 7, 9, 8];
// var numb_array = ["this", "is", "array", "of", "strings"];
console.log(numb_array);

function reverse() {
  for (var i = 0; i < Math.floor(numb_array.length / 2); i++) {
    [numb_array[i], numb_array[numb_array.length - 1 - i]] = [
      numb_array[numb_array.length - 1 - i],
      numb_array[i],
    ];
  }
  console.log(numb_array);
}

reverse(numb_array);

// ---------- Method 2 ---------------------

console.log("-----------Method 2----------");

var numb_array = [1, 4, 2, 5, 7, 9, 8];
console.log(numb_array);

function reversed() {
  var firstInd = 0;
  var lastInd = numb_array.length - 1;
  var rev;
  while (firstInd < lastInd) {
    rev = numb_array[firstInd];
    numb_array[firstInd] = numb_array[lastInd];
    numb_array[lastInd] = rev;

    firstInd += 1;
    lastInd -= 1;
  }
  console.log(numb_array);
}

reversed();

console.log("--------------Q2 Ends Here------------");

// if (" " && 100 && true && [1, 2]) {
//   console.log("if");
// } else {
//   console.log("else");
// }

console.log(
  "Q3. Write a program to check if two strings are a rotation of each other?"
);

var strOne = "console";
var strTwo = "nsoleco";
var strThree = strOne + strOne;
console.log(strTwo);
console.log(strThree);
if (strOne.length != strTwo.length) {
  console.log("Two strings length should be of same length");
  // }

  if (strThree.indexOf(strTwo) != -1) {
    console.log("Rotation Satisfied");
  } else {
    console.log("Rotation Failed, doesn't satisfied");
  }
}

console.log(
  "Q4. Write a program to print the first non-repeated character from a string?"
);

var str = "anandsingavarapu";
for (var i = 0; i < str.length; i++) {
  if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
    console.log(
      "Non-repeating Char" +
        str.charAt(i) +
        "" +
        ", at " +
        str.indexOf(str.charAt(i))
    );
    break;
  }
}

console.log(
  "Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it."
);

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

console.log(
  "Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression."
);

function char(ch) {
  return (ch >= "a" && char <= "z") || (ch >= "A" && ch <= "Z") || ch >= 0;
}

function postfixToPrefix(postfix) {
  var stack = [];
  for (var i = 0; i < postfix.length; i++) {
    if (char(postfix[i])) {
      stack.push(postfix[i]);
    } else {
      var op1 = stack[stack.length - 1];
      stack.pop();

      var op2 = stack[stack.length - 1];
      stack.pop();

      stack.push(postfix[i] + op2 + op1);
    }
  }
  return stack[stack.length - 1];
}

console.log(postfixToPrefix("AB+CD-*"));

console.log(
  "Q7. Write a program to convert prefix expression to infix expression."
);

function char(ch) {
  return (ch >= "a" && char <= "z") || (ch >= "A" && ch <= "Z") || ch >= 0;
}

function prefixToInfix(infix) {
  var stack = [];
  for (var i = infix.length - 1; i >= 0; i--) {
    if (char(infix[i])) {
      stack.push(infix[i]);
    } else {
      var op1 = stack[stack.length - 1];
      stack.pop();

      var op2 = stack[stack.length - 1];
      stack.pop();

      stack.push(op1 + infix[i] + op2);
    }
  }
  return stack[stack.length - 1];
}

console.log(prefixToInfix("AB+CD-*"));

console.log(
  "Q8. Write a program to check if all the brackets are closed in a given code snippet."
);

function brackets(s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var t = stack[stack.length - 1];

    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (
      (s[i] === "(" && t === ")") ||
      (s[i] === "{" && t === "}") ||
      (s[i] === "[" && t === "]")
    ) {
      stack.pop();
    } else if (
      (s[i] !== "(" && t !== ")") ||
      (s[i] !== "{" && t !== "}") ||
      (s[i] !== "[" && t !== "]")
    ) {
      stack.pop();
    }
    if (stack.length === 0) {
      return "All brackets are balanced";
    }
  }
  console.log(stack);
  return false;
}

console.log(brackets("[{{}][]}"));

console.log("Q9. Write a program to reverse a stack.");

class StckRev {
  constructor() {
    this.stack = [];
    this.reverse = [];
  }
  add(val) {
    this.stack.push(val);
  }
  rev() {
    if (this.stack.length == 0) {
      return "Stack Underflow";
    } else {
      return this.reverse.push(this.stack.pop());
    }
  }
  print() {
    return this.stack.push();
  }
}

var stackList = new StckRev();

stackList.add(6);
stackList.add(8);
stackList.add(90);
stackList.add(26);

console.log("Original Stack");
console.log(stackList.stack);
stackList.rev();
stackList.rev();
stackList.rev();
stackList.rev();

console.log("Reversed Stack");
console.log(stackList.reverse);

console.log("Q10. Write a program to find the smallest number using a stack.");

class SmallNum {
  constructor() {
    this.stack = [];
    this.smallest = [];
  }
  add(val) {
    if (this.stack.length == 0) {
      this.stack.push(val);
      this.smallest.push(val);
    } else {
      this.stack.push(val);
      this.smallest.push(
        Math.min(this.smallest[this.smallest.length - 1], val)
      );
    }
  }
  remove() {
    if (this.stack.length == 0) {
      this.smallest.pop();
      return this.smallest.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  small() {
    return this.smallest[this.smallest.length - 1];
  }
}

var stackList = new SmallNum();

stackList.add(3);
stackList.add(40);
stackList.add(90);
stackList.add(-3);
stackList.add(22);
stackList.add(12);

console.log(stackList.small());
