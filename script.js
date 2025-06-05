function returnTime(){
const now = new Date();
const h= String(now.getHours()).padStart(2,0);
const m = String(now.getMinutes()).padStart(2,0);
const s = String(now.getSeconds()).padStart(2,0);

document.getElementById('hours').textContent=h;
 document.getElementById('minutes').textContent=m;
 document.getElementById('seconds').textContent=s;

   function meridium()
{
    if(h>= 12)
    {
        document.getElementById('box').textContent='PM';
    }
    else{
        document.getElementById('box').textContent='AM';
    }
}
meridium();
}
setInterval(returnTime,1000);
returnTime();
