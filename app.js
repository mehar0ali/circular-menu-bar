const toggle = document.querySelector(".toggle")
const wrapper = document.querySelector(".wrapper")


toggle.onclick = function(){
    wrapper.classList.toggle("active")
}