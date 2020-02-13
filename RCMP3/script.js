$(document).ready(function() {

var data = {};
var quotes = [
  "I hate myself. But maybe I can learn to love myself. Maybe it's okay for me to be here! That's right. I am me, nothing more, nothing less! I am me. I want to be myself! I want to be here! And it's okay for me to be here!",

  "Anywhere can be paradise as long as you have the will to live.",

  "The only one who can take care of you and understand you, is you, yourself. So you must take care of yourself.",

  "If someone says it's wrong to have hope, then I'll tell them they're wrong, every single time. And I know I'll always tell them so.",

  "Don't forget: always, somewhere, someone is fighting for you. As long as you remember her, you are not alone.",

  "Even if you can't see me, even if you can't hear me, I'll be by your side.",

  "There're awful, horrible things in this world, I know that now. But there're a lot of things worth protecting, too.".

  "A lesson without pain is meaningless. That's because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.",

  "Stand up and walk. Keep moving forward. You've got two good legs. So get up and use them. You're strong enough to make your own path.",

  "Maybe life has no equal trade. Maybe you can give up all you've got, and get nothing back. But still, even if I can't prove it's true, I have to try.",

  "It makes us happy that you're with us! That's reason enough to keep existing!",

  "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you truly are."
]

var randQ = function(){
  var q = data.q[Math.floor(Math.random()*data.q.length)];
  var output = q+" ";
  return output;
}

$(function(){

  if(localStorage.quoteGen){
    data = JSON.parse(localStorage.quoteGen);
    quotes = data.q;

  }else{
    data.q = [].concat(quotes);
  }

  $("#generate").click(function(){
    $("#quote").html(randQ);
  })
  $("#quote").html(randQ);

  })
})

//got a LOT of help from here https://codepen.io/springborg/pen/HlahJ
