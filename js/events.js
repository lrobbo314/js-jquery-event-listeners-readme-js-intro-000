//define functions here

// $('p').on("keypress", getIt() {
//   alert("Hey!");
//   return;
// });

$(document).on('keypress', function(key) {
  if (key.which == 13) {
    alert('enter was pressed');
  }
});

$(document).ready(function() {
  // call functions here
  getIt();
});
