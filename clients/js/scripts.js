//function to validate user email address
function criteria() {
    const form = document.getElementById('form');
    const validChars = ['.', '@', '_', '-'];
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg');
    let firstAt = email.indexOf('@');
    let lastAt = email.lastIndexOf('@');
    let lastDot = email.lastIndexOf('.');
    let firstChar = email.charAt(0);

    let state = true;

    email = email.trim().toLowerCase();
    msg.innerHTML = '';

    if (firstChar == '@' || firstChar == '.' || firstChar == '_' || firstChar == '-' || !isNaN(firstChar)) {
        msg.innerHTML = "Kí tự email đầu tiên không hợp lệ";
        state = false;
    } else if (email.length < 8) {
        msg.innerHTML = "Địa chỉ email quá ngắn";
        state = false;
    } else if ((firstAt < 2) || (firstAt != lastAt)) {
        msg.innerHTML = "Lỗi ở @";
        state = false;
    } else if (lastDot - lastAt < 3) {
        msg.innerHTML = "Lỗi tên miền";
        state = false;
    } else if (email.length - lastDot < 3) {
        msg.innerHTML = "Lỗi ở .com";
        state = false;
    } else {
        for (var i = 0; i < email.length && state == true; i++) {

            if ((email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122)) {
                continue;
            } else if ((email.charCodeAt(i) >= 48 && email.charCodeAt(i) <= 57)) {
                continue;
            } else if (validChars.indexOf(email.charAt(i)) != -1) {
                continue;
            } else {
                msg.innerHTML = "Vui lòng nhập email hợp lệ!";
                state = false;
            }
        }
    }

    if (state == true) {
        msg.innerHTML = 'Cám ơn bạn, tin nhắn của bạn đã gửi thành công. <br> Chúng tôi sẽ sớm phản hồi bạn';
        document.getElementById('email').classList.remove("invalid")
    } else {
        document.getElementById('email').classList.add("invalid")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    criteria();
});

//SEARCH
const search = document.getElementById('search');
const searchBar = document.getElementById('searchBar');
const searchBox = document.getElementById('searchBox');
//click on the Magnifier icon to toggle the search bar
search.addEventListener('click', function () {
    searchBar.classList.toggle('show')
    searchBar.classList.toggle('hide')
    searchBox.focus()
})
//press escape to close the search bar
searchBar.addEventListener('keydown', (event) => {
    var keyName = event.key;
    console.log(keyName);
    if ((keyName == 'Escape' && searchBar.classList.contains('show') == true)) {
        searchBar.classList.remove('show')
        searchBar.classList.add('hide')
    }
    if ((keyName == 'Enter' && searchBar.classList.contains('show') == true)) {
        searchBar.classList.remove('show')
        searchBar.classList.add('hide')
    }
})

searchBox.addEventListener('blur', (event) => {
    searchBar.classList.remove('show')
    searchBar.classList.add('hide')
    // var keyName = event.key;
    // console.log("keyName");
    // if ((keyName == 'Escape' && searchBar.classList.contains('show') == true)) {

    // }
})

document.querySelector('header .logo').addEventListener('click', () => {
    window.location = '/home'
})

//SCROLL TO TOP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector('.scroll-top').classList.remove('d-none')
  } else {
    document.querySelector('.scroll-top').classList.add('d-none')
  }
}
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo(0, 0);
})