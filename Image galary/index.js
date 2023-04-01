const panels = document.querySelectorAll('.panel');
console.log(panels);

function openPanel() {
    this.classList.toggle('open')
    console.log("clicked");
};

function TextView() {
    this.classList.toggle('open-active')
    console.log("opened");
}

panels.forEach(panel => panel.addEventListener('click', openPanel));
panels.forEach(panel => panel.addEventListener('click', TextView));