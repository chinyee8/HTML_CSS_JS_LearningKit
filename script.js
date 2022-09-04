function p01Func() {
    document.getElementById("problem").innerHTML = "<p>Receive two numbers as sides which are height and width of a rectangle and output the rectangle's perimeter.</p>";

    setFlowchart("Flowchart/Problem1.jpg");

    setJs("JavaScriptSolution/Problem1.jpg");
    document.getElementById("js-answer").onclick = function () {
        var w = parseInt(prompt("Please input width: ", ""));
        var h = parseInt(prompt("Please input height: ", ""));
        var p = 2 * (w + h);
        alert("perimeter: " + p);
    }

    setJava("JavaSolution/Problem1.jpg");

    setCheckbox();
}

function p02Func() {
    document.getElementById("problem").innerHTML = "<p>Receive three numbers for x-axis, y-axis and z-axis and output the volume of Ellipsoid.</p>";

    setFlowchart("Flowchart/Problem2.jpg");

    setJs("JavaScriptSolution/Problem2.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var b = parseInt(prompt("Please input number: ", ""));
        var c = parseInt(prompt("Please input number: ", ""));

        var p = (4 / 3) * Math.PI * a * b * c;
        var volume = p.toFixed(2);

        alert("volume: " + volume);
    }

    setJava("JavaSolution/Problem2.jpg");

    setCheckbox();
}

function p03Func() {
    document.getElementById("problem").innerHTML = "<p>Receive three numbers as the numerical coefficients from the quadratic equation ax^2+bx+c=0 and output the roots of the quadratic equation.</p>";

    setFlowchart("Flowchart/Problem3.jpg");

    setJs("JavaScriptSolution/Problem3.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var b = parseInt(prompt("Please input number: ", ""));
        var c = parseInt(prompt("Please input number: ", ""));

        var x1 = ((-b - (Math.sqrt((Math.pow(b, 2)) - (4 * a * c)))) / (2 * a));
        var x2 = ((-b + (Math.sqrt((Math.pow(b, 2)) - (4 * a * c)))) / (2 * a));

        var root1 = x1.toFixed(2);
        var root2 = x2.toFixed(2);

        alert("one root: " + root1);
        alert("another: " + root2);
    }

    setJava("JavaSolution/Problem3.jpg");

    setCheckbox();
}

function p04Func() {
    document.getElementById("problem").innerHTML = "<p>Receive three numbers as the numerical coefficients from the quadratic equation ax^2+bx+c=0 and determine whether the quadratic equation has 2 distinct real roots, 1 root or no roots.</p>";

    setFlowchart("Flowchart/Problem4.jpg");

    setJs("JavaScriptSolution/Problem4.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var b = parseInt(prompt("Please input number: ", ""));
        var c = parseInt(prompt("Please input number: ", ""));

        var D = Math.pow(b, 2) - (4 * a * c);

        if (D > 0) {
            alert("It has 2 distinct roots");
        } else if (D == 0) {
            alert("Its roots are identical");
        } else {
            alert("it has no roots in real numbers");
        }

    }

    setJava("JavaSolution/Problem4.jpg");

    setCheckbox();
}

function p05Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a number as the marks received and determine whether what grade the student will received either A+, A, B+, B, C+, C, D+, D, E or F.</p>";

    setFlowchart("Flowchart/Problem5.jpg");

    setJs("JavaScriptSolution/Problem5.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));

        switch (true) {
            case (a > 89):
                answer = "A+";
                break;
            case (a > 79):
                answer = "A";
                break;
            case (a > 74):
                answer = "B+";
                break;
            case (a > 69):
                answer = "B";
                break;
            case (a > 64):
                answer = "C+";
                break;
            case (a > 59):
                answer = "C";
                break;
            case (a > 54):
                answer = "D+";
                break;
            case (a > 49):
                answer = "D";
                break;
            case (a > 39):
                answer = "E";
                break;
            default:
                answer = "F";
        }

        alert(answer);
    }

    setJava("JavaSolution/Problem5.jpg");

    setCheckbox();
}

function p06Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a number and determine whether the number is positive or negative. When number inputted is 0, button will be disabled.</p>";

    setFlowchart("Flowchart/Problem6.jpg");

    setJs("JavaScriptSolution/Problem6.jpg");
    document.getElementById("js-answer").onclick = function () {
        var num = parseInt(prompt("Please input number: ", ""));

        if (num > 0) {
            alert("input is positive");
        } else if (num < 0) {
            alert("input is negative");
        } else {
            document.getElementById("jsSolution").disabled = true;
        }
    }

    setJava("JavaSolution/Problem6.jpg");

    setCheckbox();
}

function p07Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a number and determine whether the number is positive or negative. When number inputted is 0, total number of positive numbers and negative numbers will be outputted.</p>";

    setFlowchart("Flowchart/Problem7.jpg");

    setJs("JavaScriptSolution/Problem7.jpg");
    document.getElementById("js-answer").onclick = function () {
        var positive = 0;
        var negative = 0;

        do {
            var num = parseInt(prompt("Please input number(input 0 to stop): ", ""));

            if (num > 0) {
                positive += 1;
                alert("Input " + num + " is positive");
            } else if (num < 0) {
                negative += 1;
                alert("Input " + num + " is negative");
            }
        } while (num != 0);

        alert("Positive: " + positive + "   Negative: " + negative);

    }

    setJava("JavaSolution/Problem7.jpg");

    setCheckbox();
}

function p08Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a number and determine whether the number is divisble by 6 or not. When number inputted is 0, total numbers that are divisible by 6 is outputted.</p>";

    setFlowchart("Flowchart/Problem8.jpg");

    setJs("JavaScriptSolution/Problem8.jpg");
    document.getElementById("js-answer").onclick = function () {
        var count = 0;

        do {
            var num = parseInt(prompt("Please input number: ", ""));

            a = num % 3;
            b = num % 2;

            if (a == 0 && b == 0) {
                count += 1;
                alert(num + " is divisible by 6");
            } else {
                alert(num + " is not divisible by 6");
            }
        } while (num != 0);

        alert("Total divisible by 6: " + count);
    }

    setJava("JavaSolution/Problem8.jpg");

    setCheckbox();
}

function p09Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a positive number. The number is separated into digits and separated digits are outputted.</p>";

    setFlowchart("Flowchart/Problem9.jpg");

    setJs("JavaScriptSolution/Problem9.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please enter a number: ", ""));
        var num = a;
        var reminder;
        var output = [""];
        do {
            reminder = a % 10;
            output.push(reminder);
            a = parseInt(a / 10);
        } while (a > 0);

        alert("number: " + num + "  its digits: " + output);
    }

    setJava("JavaSolution/Problem9.jpg");

    setCheckbox();
}

function p10Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a positive number and determine the total number of digit 7 found in the number inputted.</p>";

    setFlowchart("Flowchart/Problem10.jpg");

    setJs("JavaScriptSolution/Problem10.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var num = a;
        var reminder;
        var counter = 0;

        do {
            reminder = a % 10;
            if (reminder == 7) {
                counter = counter + 1;
            }
            a = parseInt(a / 10);
        } while (a > 0);

        alert(" number of 7's: " + counter);
    }

    setJava(".jpg");

    setCheckbox();
}

function p11Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a positive number and the sum of its digits is outputted.</p>";

    setFlowchart("Flowchart/Problem11.jpg");

    setJs("JavaScriptSolution/Problem11.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var reminder;
        var sum = 0;

        do {
            reminder = a % 10;
            sum = sum + reminder;
            a = parseInt(a / 10);
        } while (a > 0);

        alert("sum of digits: " + sum);
    }

    setJava(".jpg");

    setCheckbox();
}

function p12Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a positive number and 'yes' is outputted if the number inputted is equal to its reverse, otherwise 'no' is outputted.</p>";

    setFlowchart("Flowchart/Problem12.jpg");

    setJs("JavaScriptSolution/Problem12.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var reminder;
        var temp = a;
        var reverse = 0;

        do {
            reminder = a % 10;
            reverse = (reverse * 10) + reminder;
            a = parseInt(a / 10);
        } while (a > 0);

        if (temp == reverse) {
            output = "yes";
        } else {
            output = "no";
        }

        alert("equal to its reverse? " + output);
    }

    setJava(".jpg");

    setCheckbox();
}

function p13Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a positive number and the factorial of the number, n! is outputted.</p>";

    setFlowchart("Flowchart/Problem13.jpg");

    setJs("JavaScriptSolution/Problem13.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var num = a;
        var fact = 1;

        if (a > 0) {
            for (var i = 1; i <= a; i = i + 1) {
                fact = fact * i;
            }
        }

        alert(num + "! = " + fact);
    }

    setJava(".jpg");

    setCheckbox();
}

function p14Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a number as the first n values of Fibonacci sequence and are outputted.</p>";

    setFlowchart("Flowchart/Problem14.jpg");

    setJs("JavaScriptSolution/Problem14.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var secondLast = 0;
        var last = 1;
        var newValue;


        if (a > 1) {
            outputObj = secondLast + ", " + last;

            for (i = 3; i <= a; i = i + 1) {
                newValue = secondLast + last;
                outputObj += ", " + newValue;
                secondLast = last;
                last = newValue;
            }
        }

        alert("Fibonnaci: " + outputObj);
    }

    setJava(".jpg");

    setCheckbox();
}

function p15Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a positive number and output n rows where each row contains k pairs of 'XX'.</p>";

    setFlowchart("Flowchart/Problem15.jpg");

    setJs("JavaScriptSolution/Problem15.jpg");
    document.getElementById("js-answer").onclick = function () {
        var a = parseInt(prompt("Please input number: ", ""));
        var outputObj = "";
        if (a > 0) {
            for (row = 1; row <= a; row++) {
                outputObj += "\r\n";

                for (k = 1; k <= row; k++) {
                    outputObj += "XX ";
                }
            }
        }

        alert(outputObj);
    }

    setJava(".jpg");

    setCheckbox();
}

function p16Func() {
    document.getElementById("problem").innerHTML = "<p>Receive a number and output whether the number is either a prime number or not a prime number.</p>";

    setFlowchart("Flowchart/Problem16.jpg");

    setJs("JavaScriptSolution/Problem16.jpg");
    document.getElementById("js-answer").onclick = function () {
        var num = parseInt(prompt("Please input number: ", ""));
        var prime = true;
        var d = 2;

        while (prime == true && d == 2) {
            if (num % d == 0) {
                prime = false;
            }

            d = d + 1;
        }

        if (prime == true) {
            outputObj = num + " is a prime number.";
        } else {
            outputObj = num + " is not a prime number.";
        }

        alert(outputObj);
    }

    setJava(".jpg");

    setCheckbox();
}

function p17Func() {
    document.getElementById("problem").innerHTML = "<p>Four numbers are inputted and their sum is calculated. Another four numbers are inputted and their sum is calculated. If the sum of the first four numbers is equal to the sum of the last four numbers, then output 'yes', otherwise output 'no'.</p>";

    setFlowchart("Flowchart/Problem17.jpg");

    setJs("JavaScriptSolution/Problem17.jpg");
    document.getElementById("js-answer").onclick = function () {
        var outputObj;
        var sum1 = 0;
        var sum2 = 0;

        for (i = 1; i <= 4; i++) {
            var num = parseInt(prompt("Please input 8 numbers: ", ""));
            sum1 += num;
        }


        for (i = 1; i <= 4; i++) {
            var num = parseInt(prompt("Please input 8 numbers: ", ""));
            sum2 += num;
        }

        if (sum1 == sum2) {
            outputObj = "yes";
        } else {
            outputObj = "no";
        }

        alert("Is sum1 equal to sum2? " + outputObj);
    }

    setJava(".jpg");

    setCheckbox();
}

function p18Func() {
    document.getElementById("problem").innerHTML = "<p>Number is continuously received and whether it is positive or negative is determined in a while loop. Once the received number is equal to 0 and the positive number is more than the two times negative, the loop is ended. There is no output.</p>";

    setFlowchart("Flowchart/Problem18.jpg");

    setJs("JavaScriptSolution/Problem18.jpg");
    document.getElementById("js-answer").onclick = function () {
        var p = 0;
        var n = 0;
        var outputObj = "";
        var num;

        do {
            num = parseInt(prompt("Please input number: ", ""));

            outputObj += num + ", ";

            if (num > 0) {
                p += 1;
            } else if (num < 0) {
                n += 1;
            }
        } while (num != 0 && p <= 2 * n);

        alert(outputObj);
    }

    setJava(".jpg");

    setCheckbox();
}

function p19Func() {
    document.getElementById("problem").innerHTML = "<p>First four numbers are received and the total number of negative numbers is counted. The last four numbers are received and the total number of positive numbers is counted. If the total number of positive numbers is equal to total number of negative numbers, then 'yes' is outputted, otherwise output 'no'.</p>";

    setFlowchart("Flowchart/Problem19.jpg");

    setJs("JavaScriptSolution/Problem19.jpg");
    document.getElementById("js-answer").onclick = function () {
        var cnt1 = 0;
        var cnt2 = 0;
        var output;
        for (i = 1; i <= 4; i++) {
            var num = parseInt(prompt("Please input 8 numbers: ", ""));
            if (num < 0) {
                cnt1 += 1;
            }
        }

        for (i = 1; i <= 4; i++) {
            var num = parseInt(prompt("Please input 8 numbers: ", ""));
            if (num > 0) {
                cnt2 += 1;
            }
        }

        if (cnt1 == cnt2) {
            output = "yes";
        } else {
            output = "no";
        }

        alert("is cnt1 = cnt2? " + output);
    }

    setJava(".jpg");

    setCheckbox();
}

function p20Func() {
    document.getElementById("problem").innerHTML = "<p>In the main algorithm, a number is received and all the prime numbers lesser than the number inputted are outputted. Sub-algorithm is created to return 'true' if the number inputted from main algorithm is a prime number, otherwise return 'false'.</p>";

    setFlowchart("Flowchart/Problem20.jpg");

    setJs("JavaScriptSolution/Problem20.jpg");
    document.getElementById("js-answer").onclick = function () {
        var num = parseInt(prompt("Please input a number: ", ""));
        var outputObj = [""];

        for (i = 2; i <= num; i = i + 1) {
            if (prime(i) == true) {
                outputObj.push(i);
            }
        }
        alert("Prime numbers: " + outputObj);
    }

    setJava(".jpg");

    setCheckbox();
}

function setFlowchart(src) {
    document.getElementById("flowchart").setAttribute("src", src);
    document.getElementById("flowchart").style.display = "none";
}

function setJs(src) {
    document.getElementById("javascript").setAttribute("src", src);
    document.getElementById("javascript").style.display = "none";
}

function setJava(src) {
    document.getElementById("java").setAttribute("src", src);
    document.getElementById("java").style.display = "none";
}

function setCheckbox() {
    document.getElementById("checkbox-flowchart").checked = false;
    document.getElementById("checkbox-javascript").checked = false;
    document.getElementById("checkbox-java").checked = false;
}

function checkUncheck1() {
    if (document.getElementById("checkbox-flowchart").checked == true) {
        document.getElementById("flowchart").style.display = "inline";
    } else {
        document.getElementById("flowchart").style.display = "none";
    }
}
function checkUncheck2() {
    if (document.getElementById("checkbox-javascript").checked == true) {
        document.getElementById("javascript").style.display = "inline";
    } else {
        document.getElementById("javascript").style.display = "none";
    }
}

function checkUncheck3() {
    if (document.getElementById("checkbox-java").checked == true) {
        document.getElementById("java").style.display = "inline";
    } else {
        document.getElementById("java").style.display = "none";
    }
}
