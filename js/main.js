const TokeiInterval=3000;
const Jikoku=[
 "๐", "๐ง", "๐","๐",
 "๐","๐","๐","๐ ",
 "๐","๐","๐","๐ ",
 "๐","๐ก","๐","๐ข",
 "๐","๐ฃ","๐","๐ค",
 "๐","๐ฅ","๐","๐ฆ",
];
const ItemMaster=[
  "๐ญ","๐","๐ฅช","๐ฅ",  
  "๐ฃ","๐","๐","๐ฒ",
   "๐ฎ","๐","๐","๐ฅ",
   "๐ฐ","๐ฉ","๐","๐จ",
];
const KyakuMaster=[
  "๐","๐","๐ง","๐ฆ",
  "๐ค","๐ฆ","๐ฆ","๐ฆ",
  "๐บ","๐","๐ด","๐ฆ",
  "๐ข","๐","๐","๐ฆ",
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
ใChumon.empty();
ใChumon.append("<p>ใชใใใใ๐</p>");
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
