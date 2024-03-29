var tkn = localStorage.getItem("token");
const host = "isserver.onrender.com"
if (tkn) {
    let xhr0 = new XMLHttpRequest();
    xhr0.open("POST", "https://" + host + "/api/getuserdata");
    xhr0.setRequestHeader('Content-type', 'application/json')

    xhr0.onreadystatechange = () => {
        if (xhr0.readyState == 4) {
            if (xhr0.status == 200) {
                window.location.replace("/isv2");
            }
        }
    }
    xhr0.send(JSON.stringify({
        token: tkn
    }));

} else {
    let htmlContent = ` <form id="myForm" action="" onsubmit="handlesubmit(event)">
    <h2>Registration</h2>

    <label for="fn">First Name</label>
    <input type="text" name="fn" id="fn" required>
    <label for="ln">Last Name</label>
    <input type="text" name="ln" id="ln" required>


    <label for="ema">Email</label>
    <input type="email" name="email" id="ema" required>



    <label for="pass">Password</label>
    <input type="password" name="password" id="pass" required>




    <input type="submit" value="Register">

    <a href="/isv2/login ">Already Have An Account</a>


</form>`
    document.body.innerHTML = htmlContent;
}


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            localStorage.setItem("token", event.target.response);
            window.location.replace("/isv2");
        }
    }
}

function handlesubmit(e) {
    e.preventDefault();
    xhr.open("POST", "https://" + host + "/api/register");
    xhr.setRequestHeader('Content-type', 'application/json');
    var fName = document.getElementById("fn").value;
    var lName = document.getElementById("ln").value;
    var ema = document.getElementById("ema").value;
    var pass = document.getElementById("pass").value;


    xhr.send(JSON.stringify({
        fn: fName,
        ln: lName,
        email: ema,
        password: pass
    }));
}
