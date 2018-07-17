function welcome() {
    // The username from login.html has been added as query string so we need to
    // get the value of username from the query string. We can do this by using a 
    // built-in JavaScript function called URLSearchParams which makes use of 
    // the built-in 'window.location.search' property.
    var urlParams = new URLSearchParams(window.location.search);

    // We then use the built-in getAll function and pass in the key of the query string
    // which is 'username' to get its value.
    var username = urlParams.getAll('username');

    // Once we get the value of username from the query string,
    // we will set the Welcome message to the div with id='welcome'.
    document.getElementById('welcome').textContent = "Welcome " + username + "!";
}