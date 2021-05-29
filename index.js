const HEX_NUMBER = document.querySelector("h1");
const BODY = document.querySelector("body");

//버튼 클릭시 페이시 새로고침하기 위한 함수
function refreshPage(){
    window.location.reload();
}

function hexGenerator() {
    const hexNumbers = [
        0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'
    ];

    let result = "#";

    //randomIndex => 배열에서 랜덤하게 요소 선택하기위한 랜덤숫자
    for(var i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random()*hexNumbers.length);
        result += hexNumbers[randomIndex];
    }

    HEX_NUMBER.innerText = `HEX COLOR : ${result}`;
    BODY.style.backgroundColor = `${result}`;

    return result;
}



function init(){
    hexGenerator();
}

init();