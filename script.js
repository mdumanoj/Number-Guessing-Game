var myNum;
var chance;
function getNum() {
    myNum = Math.floor((Math.random() * 100) + 1);
    chance = +6;
}
function check() {
    var num = +document.getElementById("guessme").value;
    document.getElementById('result').style.visibility= 'visible';
    if(--chance <= 0) {
        document.getElementById('result').innerHTML ="Its out of Chance. Number is "+myNum;
        alert("Its out of Chance. Number is "+myNum+"\n\nRefresh page to play again.");
		document.getElementById('chance').innerHTML = '0';
        return false;
    }
    document.getElementById('chance').innerHTML = chance;
    if(myNum < num) {
        document.getElementById('result').innerHTML ="Not That Much Greater. Go low";
    }
    else if(myNum > num) {
        document.getElementById('result').innerHTML ="Not That Much Smaller. Come Up";
    }
    else {
        document.getElementById('result').innerHTML ="Hurray..! You got the number";
        alert("Hurray..! You got the number. Yes it is "+myNum);
        window.location.reload();
    }
    return false;
}