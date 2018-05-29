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
output ("","log");
$input.focus();