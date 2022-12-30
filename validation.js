(function () {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
          console.log(userInfo);
        },
        false
      );
    });
  })();
  
  const inputs = document.querySelectorAll("input");
  
  
function onBlurOnFocus(input) {
    input.onfocus = (e) => {
      e.target.previousElementSibling.classList.toggle("text-primary");
    };
    input.onblur = (e) => {
      e.target.previousElementSibling.classList.toggle("text-primary");
    };
  }