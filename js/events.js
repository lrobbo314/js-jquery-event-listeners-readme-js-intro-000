//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    let i = document.getElementsByTagName('img')[0];
    i.style.border = '2px solid #E8272C';
    console.log(i);
  });
}

$(document).ready(function() {
  // call functions here
  getIt();
});
