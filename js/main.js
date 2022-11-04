const TokeiInterval=3000;
const Jikoku=[
 "🕛", "🕧", "🕐","🕜",
 "🕑","🕝","🕒","🕞 ",
 "🕓","🕟","🕔","🕠",
 "🕕","🕡","🕖","🕢",
 "🕗","🕣","🕘","🕤",
 "🕙","🕥","🕚","🕦",
];
const ItemMaster=[
  "🌭","🍔","🥪","🥙",  
  "🍣","🍛","🍜","🍲",
   "🌮","🍕","🍟","🥞",
   "🍰","🍩","🍙","🍨",
];
const KyakuMaster=[
  "🐒","🐔","🐧","🐦",
  "🐤","🦆","🦅","🦇",
  "🐺","🐗","🐴","🦄",
  "🐢","🐈","🐇","🦝",
];
const Tokei=$("#Tokei");
const Chumon=$("#Chumon");
const Items=$("#Items");
const Kyaku=$("#Kyaku");

let Order=[];

function OrderCheck(c){
  const result= Order.includes(c);
  return result;
}

function ChumonUpdate(){
　Chumon.empty();
　Chumon.append("<p>なんかくれ🍔</p>");
}

function RandomItem(){
   const r=Math.random();
   const item=Math.floor(r*16);
   const c=ItemMaster[item];
   const e=$("<span>"+c+"</span>");
   e.on("click",function(){OrderCheck(c);});
   
   return e;
}

function RandomKyaku(){
   const r=Math.random();
   const item=Math.floor(r*16);
   const c=KyakuMaster[item];
   const e=$("<span>"+c+"</span>");
   e.on("click",function(){OrderCheck(c);});
   
   return e;
}
function ItemsReset(){
  for(let i=0;i<25;i++){
    Items.append(RandomItem());
  }//Items.append
 
}
let now=0;

function TokeiTick(){
  now++;
  Tokei.text(Jikoku[now%24]);
  
}

function KyakuUpdate(){
 
  setTimeout(function(){
   Kyaku.append(RandomKyaku());
   KyakuUpdate();
  },3000);
  
}
ChumonUpdate();
ItemsReset();
KyakuUpdate();
setInterval(TokeiTick,TokeiInterval);
