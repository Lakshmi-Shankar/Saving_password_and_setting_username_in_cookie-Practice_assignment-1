document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

    let count = getCookie('count');

  if (count !== null) {
    count+=1;
  } else {
    count = 1;
  }

 
  setCookie('count', count, 2);


  let countDisplay = document.getElementById('count-display');
  if (countDisplay) {
    countDisplay.textContent = 'Page count: ' + count;
  }
});