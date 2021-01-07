document.addEventListener("DOMContentLoaded", (event) => {
  // Your JavaScript goes here...
  document.cookie = "favoriteMovie=PrincessMononoke";
  document.cookie = "fruitType=kiwi";
  setCookie("color", "orange");
  setCookie("computer", "mac");
  console.log(getCookieValue("color"));
  console.log(getCookieValue("fruitType"));
  console.log(getCookieValue("cup"));
  deleteCookie("computer");
  // window.alert(document.cookie);
});

// window.onload = () => {
// 	console.log('this script loads when all resources and the DOM are ready')
// 	// console.log(document.getElementById('body').id)
// }

function setCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookies() {
  return document.cookie.split("; ");
}

function getCookieValue(name) {
  let value = null;
  getCookies().forEach(curr => {
    let pair = curr.split("=");
    if (pair[0] === name) value = pair[1];
  });
  return value;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}