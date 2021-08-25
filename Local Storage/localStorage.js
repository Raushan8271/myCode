let logindata = [];
function check() {
  let name = document.getElementById("name_").value;
  let password = document.getElementById("password").value;
  let confPassword = document.getElementById("confPassword").value;

  let logindetails = { name: name, password: password, confPassword: confPassword }
  
  if (localStorage.logindata != undefined) {
    logindata = localStorage.getItem("logindata");
    logindata = JSON.parse(logindata);
  }
  logindata.push(JSON.stringify(logindetails));
  logindata = JSON.stringify(logindata);
  localStorage.setItem("logindata", logindata);
}