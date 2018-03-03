//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    $('img').style.border = '2px solid #ff0000'
  });
}

$(document).ready(function() {
  // call functions here
  getIt();
});
