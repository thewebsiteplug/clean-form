$(document).ready(function () {
    $('#form').validate({
        rules: {
            fName: 'required',
            lName: 'required',
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            fName: 'First Name cannot be empty',
            lName: 'Last Name cannot be empty',
            email: 'Looks like this is not an email',
            password: 'Password cannot be empty'
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});