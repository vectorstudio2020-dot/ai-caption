let latestData=null;

async function loadLottery(){

const res=await fetch("https://api.allorigins.win/raw?url=https://lotto.api.rayriffy.com/latest");
const data=await res.json();

latestData=data.response;

document.getElementById("date").innerText="งวด "+latestData.date;

document.getElementById("first").innerText=
latestData.prizes[0].number;

document.getElementById("front").innerText=
latestData.runningNumbers[0].number+" "+latestData.runningNumbers[1].number;

document.getElementById("back").innerText=
latestData.runningNumbers[2].number+" "+latestData.runningNumbers[3].number;

document.getElementById("last").innerText=
latestData.runningNumbers[4].number;

}

function check(){

const number=document.getElementById("checkNumber").value;

if(number===latestData.prizes[0].number){
document.getElementById("result").innerText="🎉 ถูกรางวัลที่ 1";
}else{
document.getElementById("result").innerText="ไม่ถูกรางวัล";
}

}

loadLottery();
