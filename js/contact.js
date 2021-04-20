// Form Code
function submit() {
    // reset form outcome element's styles
    document.getElementById("success").style.display = "none";
    document.getElementById("error-msg").style.display = "none";
    // grab form data
    var form = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        msg: document.getElementById("msg").value,
        ref: document.getElementById("ref").value
    };
    // set boolean flag
    var isValid = false;

    // change boolean flag only when
    // all input values have a 'length' that is not 'falsey'
    // aka not 0
    if (form.name.length && 
        form.email.length && 
        form.phone.length && 
        form.msg.length && 
        form.ref.length) {
        isValid = true;
    }

    if (isValid) {
        var str = "<p>Your Details:</p>";
        str += "<p>Name: " + form.name + "</p>";
        str += "<p>Email: " + form.email + "</p>";
        str += "<p>Phone: " + form.phone + "</p>";
        str += "<p>Message: " + form.msg + "</p>";

        document.getElementById("success").style.display = "show";
        document.getElementById("output").innerHTML = str;
    } else {
        document.getElementById("error-msg").style.display = "none";
    }
}
