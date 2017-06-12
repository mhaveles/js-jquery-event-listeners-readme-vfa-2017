//define functions here
function getIt() {
  alert('Hey!');
}
function frameIt() {
  $('img').addClass('tasty');
}
function pressIt() {
  $('form').on('keydown', function(key){
    if (key.which == 71) {
      alert('you pressed G');
    }
  })

}
function submitIt() {
  alert('Your form is going to be submitted now');
}

$(document).ready(function(){
// call functions here
  $('p').on('click',getIt());  //hey alert
  $('img').on('load', frameIt());  //red frame
  //tests for keydown unsuccessful

  //alert('worked')
  pressIt();



  $('form').on('submit', submitIt());     //submit button

});
