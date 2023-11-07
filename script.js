function login() {
  var done = 0;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "sarip" && password === "123") {
    if (confirm("anda ingin masuk?") == true) {
      setTimeout((resolve, reject) => {
        resolve(
          (window.location.href = "https://github.com/Sarip-21/mabim-fasilkom/")
        );
      }, 1000);
    } else {
      alert("login failed");
    }
  } else {
    if (done === 0) {
      alert("username/password failed");
    }
  }
}
