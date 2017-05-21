//declare all variables


var wins = 0;
var losses = 0;
var total = 0;
var targetRed = $('#redcrystal');
var targetBlue= $('#bluecrystal');
var targetYellow= $('#yellowcrystal');
var targetGreen= $('#greencrystal');
var numOptions = [];
var number;
// random number chosen, show in #numbertoGuess .innerHTML
  //between 19-120
function pickRandomNumber() {
 number = Math.floor(Math.random() * 111) + 19;
$("#numbertoMatch").html(number);
  console.log(number);
}
// crystals .onclick  add specific(random every turn) amount of points
// to player's total score, show in #total .innerHTML
//   between 1-12
function genCrystalPoints(){
  for (var i=0; i < 4; i++){
    var points = Math.floor(Math.random()* 11) +1;
    numOptions.push(points);
  }
}
function assignbuttonValue (arr) {
  targetRed.attr("buttonValue", arr[0]);
  targetBlue.attr("buttonValue", arr[1]);
  targetYellow.attr("buttonValue", arr[2]);
  targetGreen.attr("buttonValue", arr[3]);
}
 function reset () {
   numOptions = [];
   total = 0;
   pickRandomNumber();
   genCrystalPoints();
   assignbuttonValue(numOptions);
 }

pickRandomNumber();
genCrystalPoints();
assignbuttonValue(numOptions);

$('.crystals').on('click', function () {
  btnValue = ($(this).attr("buttonValue"));
  btnValue = parseInt(btnValue);
  total += btnValue;
  $('#totalScore').text(total);
  console.log(total);
  console.log(number);
  if (total === number ){
    wins++;
    $('#wins').text(wins);
    reset();
  }
  else if (total > number) {
    losses++;
    $('#losses').text(losses);
    reset();
  }

});
