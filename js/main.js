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
  "",

];
const Tokei=$("#Tokei");
const Chumon=$("#Chumon");
const Items=$("#Items");

function ChumonUpdate(){
　Chumon.empty();
　Chumon.append("<p>なんかくれ🍔</p>");
}

let now=0;

function TokeiTick(){
  now++;
  Tokei.text(Jikoku[now%24]);

}
ChumonUpdate();
setInterval(TokeiTick,TokeiInterval);
