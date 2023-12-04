import {puzzleInput} from "./puzzleInput.js" 

puzzleInput()
var input = false;
var firstSum = 0;
var secondSum = 0;

document.getElementById("firstSum").onclick = function() {getFirstSum()};
document.getElementById("secondSum").onclick = function() {getSecondSum()};

const loadInput = () => {
    input = localStorage.getItem("input").split('\n')
}

function getFirstSum(){
    firstSum = 0;
    loadInput();
    input.forEach(line => {
        firstSum += getEdgeNumbers(line)
    });
    document.getElementById("result").innerText = firstSum;
}

function getSecondSum(){
    secondSum = 0;
    loadInput();
    input.forEach(line => {
        secondSum += getEdgeNumbers(resolveNumbers(line))
    });
    document.getElementById("result").innerText = secondSum;
}

function getEdgeNumbers(line){
    var strNumber = line.replace(/\D/g, "");
    if(strNumber.length>0){
        return parseInt(strNumber[0] + strNumber.slice(-1))
    }
    
    return 0;
}

function resolveNumbers(line){
    line = line.replace(/nine/g, "n9e");
    line = line.replace(/eight/g, "e8t");
    line = line.replace(/one/g, "o1e");
    line = line.replace(/two/g, "t2o");
    line = line.replace(/three/g, "t3e");
    line = line.replace(/four/g, "f4r");
    line = line.replace(/five/g, "f5e");
    line = line.replace(/six/g, "s6x");
    line = line.replace(/seven/g, "s7n");

    return line
}