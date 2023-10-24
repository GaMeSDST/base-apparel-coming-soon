function check(){
let email = document.querySelector(".form input").value;
let regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let ans = email.match(regex)

if (ans == null) {
    document.querySelector(".form input").classList.add("wrong")
    document.querySelector(".form img").style.cssText = "opacity: 1"
    document.querySelector(".text-warning").style.cssText ="opacity: 1"
    }
}