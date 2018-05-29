let $input = $("#input");
let $outputDiv = $("#outputDiv");
let isShiftDown = false;
let inputs = new Array();
let inputsIndex = -1;
let latestInput  = "";

$input.on({
    "keydown": function (event) {
        if (event.keyCode === 16) {
            isShiftDown = true;
        }
        else if (!isShiftDown && event.keyCode === 13) {
            let inputText = this.innerText;
            this.innerText = "";
            if (inputText.length > 0) {
                inputs.unshift(inputText);
                inputsIndex = -1;
                output(inputText, "input");
                try {
                    let outputObject = eval(inputText);
                    if (typeof(outputObject) !== "undefined") {
                        let outputText = outputObject.toString();
                        if (typeof(outputText) !== "undefined") {
                            output(outputText, "output");
                        }
                    } else {
                        output("undefined", "output");
                    }
                }
                catch (err) {
                    output(err.toString(), "error");
                }
            }
            event.preventDefault();
        }
        else if(event.keyCode === 38){
            if(inputsIndex+1<inputs.length){
                if(inputsIndex === -1){
                    latestInput = this.innerText;
                    this.innerText = inputs[0];
                    inputsIndex = 0;
                } else{
                    this.innerText = inputs[++inputsIndex];
                }
                event.preventDefault();
            }
        }
        else if(event.keyCode === 40){
            if(inputsIndex>0){
                this.innerText = inputs[--inputsIndex];
            }
            else if(inputsIndex === 0){
                this.innerText = latestInput;
                inputsIndex = -1;
            }
            event.preventDefault();
        }
    },
    "keyup": function (event) {
        if (event.keyCode === 16) {
            isShiftDown = false;
        }
    }
});


function output(content, mode) {
    let element = $("<div></div>");
    element.addClass(mode);
    if (mode === "error" || mode === "warn") {
        content = "<span class='errorArrow'>▶</span>" + content;
    }
    element.html(content);
    $outputDiv.append(element);
}

let oldLog = console.log;
console.log = function () {
    output(arguments[0].toString(), "log");
    oldLog.apply(console, arguments);
};

let oldInfo = console.info;
console.info = function () {
    output(arguments[0].toString(), "log");
    oldInfo.apply(console, arguments);
};

let oldError = console.error;
console.error = function () {
    output(arguments[0].toString(), "error");
    oldError.apply(console, arguments);
};

let oldWarn = console.warn;
console.warn = function () {
    output(arguments[0].toString(), "warn");
    oldWarn.apply(console, arguments);
};

output("<font color=\"#00AEF7\">w</font><font color=\"#00AEEF\">e</font><font color=\"#00AEE7\">l</font><font color=\"#00AEE0\">c</font><font color=\"#00AED8\">o</font><font color=\"#00AED0\">m</font><font color=\"#00AEC8\">e</font> <font color=\"#00AEC1\">t</font><font color=\"#00AEB9\">o</font> <font color=\"#00AEB1\">u</font><font color=\"#00AEAA\">s</font><font color=\"#00AEA2\">e</font> <font color=\"#00AE9A\">J</font><font color=\"#00AE92\">S</font><font color=\"#00AE8B\">C</font><font color=\"#00AE83\">o</font><font color=\"#00AE7B\">n</font><font color=\"#00AE73\">s</font><font color=\"#00AE6C\">o</font><font color=\"#00AE64\">l</font><font color=\"#00AE5C\">e</font> <font color=\"#00AE55\">B</font><font color=\"#00AE4D\">y</font> <font color=\"#00AE45\">销</font><font color=\"#00AE3D\">锋</font><font color=\"#00AE36\">镝</font><font color=\"#00AE2E\">铸</font><font color=\"#00AE26\">!</font>", "log");
output ("<font color=\"#00AEFA\">V</font><font color=\"#00AEF6\">i</font><font color=\"#00AEF2\">s</font><font color=\"#00AEEE\">i</font><font color=\"#00AEEA\">t</font> <a href='https://github.com/XiaofengdiZhu/JSConsole' target='_blank'><font color=\"#00AEE6\">h</font><font color=\"#00AEE2\">t</font><font color=\"#00AEDE\">t</font><font color=\"#00AED9\">p</font><font color=\"#00AED5\">s</font><font color=\"#00AED1\">:</font><font color=\"#00AECD\">/</font><font color=\"#00AEC9\">/</font><font color=\"#00AEC5\">g</font><font color=\"#00AEC1\">i</font><font color=\"#00AEBD\">t</font><font color=\"#00AEB9\">h</font><font color=\"#00AEB4\">u</font><font color=\"#00AEB0\">b</font><font color=\"#00AEAC\">.</font><font color=\"#00AEA8\">c</font><font color=\"#00AEA4\">o</font><font color=\"#00AEA0\">m</font><font color=\"#00AE9C\">/</font><font color=\"#00AE98\">X</font><font color=\"#00AE94\">i</font><font color=\"#00AE8F\">a</font><font color=\"#00AE8B\">o</font><font color=\"#00AE87\">f</font><font color=\"#00AE83\">e</font><font color=\"#00AE7F\">n</font><font color=\"#00AE7B\">g</font><font color=\"#00AE77\">d</font><font color=\"#00AE73\">i</font><font color=\"#00AE6F\">Z</font><font color=\"#00AE6A\">h</font><font color=\"#00AE66\">u</font><font color=\"#00AE62\">/</font><font color=\"#00AE5E\">J</font><font color=\"#00AE5A\">S</font><font color=\"#00AE56\">C</font><font color=\"#00AE52\">o</font><font color=\"#00AE4E\">n</font><font color=\"#00AE4A\">s</font><font color=\"#00AE45\">o</font><font color=\"#00AE41\">l</font><font color=\"#00AE3D\">e</font></a> <font color=\"#00AE39\">t</font><font color=\"#00AE35\">o</font> <font color=\"#00AE31\">l</font><font color=\"#00AE2D\">e</font><font color=\"#00AE29\">a</font><font color=\"#00AE25\">r</font><font color=\"#00AE20\">n</font> <font color=\"#00AE1C\">m</font><font color=\"#00AE18\">o</font><font color=\"#00AE14\">r</font><font color=\"#00AE10\">e</font><font color=\"#005FFF\">.</font>","log");
$input.focus();