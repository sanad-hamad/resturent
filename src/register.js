const ValidateSignupForm = function () {
  let RegisterForm = $("#register");

  if (RegisterForm.length) {
    // check valid email
    $.validator.addMethod(
      "customemail",
      function (value, element) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
      },
      "Sorry, I've enabled very strict email validation"
    );

    // this is to password

    $.validator.addMethod(
      "loginRegex",
      function (value, element) {
        return (
          this.optional(element) ||
          /^(?=.*\d)(?=.*[a-zA-Z]).{8,32}$/.test(value)
        );
      },
      "password must contain only letters, numbers and the length less than 32 "
    );

    RegisterForm.validate({
      rules: {
        firstName: {
          required: true,
          maxlength: 32,
          minlength: 4,
        },

        email: {
          required: true,
          email: true,
          customemail: true,
        },

        phone: {
          required: true,
          minlength: 10,
          maxlength: 10,
          digits: true,
        },
        password: {
          required: true,
          minlength: 8,
          loginRegex: true,
        },
      },

      messages: {
        firstName: {
          required: "firstName is mandatory",
          isvalid: "enter valid name",
        },
        email: {
          required: "enter email like sanad@anything.com",
        },
        phone: {
          required: "Please enter only digits max lentgth 10",
        },
      },
    });
  }
};

$(document).ready(function () {
  console.log("this work correct");

  let x = $("#add-user");
  console.log(x);

  x.onclick = function () {
    console.log(x);
  };

  // this is to hide the summary and show signup content
  $("#add-user").click(function () {
    $("#summary").css("display", "none");
    $("#container").css("display", "block");
  });

  // this for validation form using jquery
  ValidateSignupForm();
});
