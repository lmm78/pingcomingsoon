
$(document).ready(function(){
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    $('#submitButton').click(function  (){
        var $errMessage = $("#errMessage");
        var $email = $("#email").val();
        var $input = $("#email")
        $errMessage.text("");

  if (!validateEmail()) {
    $errMessage.text( " please provide a valid email adress");
    $input.css("border", ".5px solid red");
  }


    })
})
