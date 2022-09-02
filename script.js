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
