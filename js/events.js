//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    $('img')[0].style.border = '2px solid #E8272C';
  });
}

$(document).ready(function() {
  // call functions here
  getIt();
});
