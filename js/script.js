//Botões Ler Mais/Menos.
let buttom = document.getElementById('read-buttom');

buttom.addEventListener('click', function() {
    let card1 = document.querySelector('.card1');
    card1.classList.toggle('active');

    if (card1.classList.contains('active')) {
        return buttom.textContent = 'Ler Menos';
    }
    buttom.textContent = 'Ler Mais';
});

let buttom2 = document.getElementById('read-buttom2');

buttom2.addEventListener('click', function() {
    let card2 = document.querySelector('.card2');
    card2.classList.toggle('active2');

    if (card2.classList.contains('active2')) {
        return buttom2.textContent = 'Ler Menos';
    }
    buttom2.textContent = 'Ler Mais';
});

let buttom3 = document.getElementById('read-buttom3');

buttom3.addEventListener('click', function() {
    let card3 = document.querySelector('.card3');
    card3.classList.toggle('active3');

    if (card3.classList.contains('active3')) {
        return buttom3.textContent = 'Ler Menos';
    }
    buttom3.textContent = 'Ler Mais';
});

//Scroll para link interno.
const menuItems = document.querySelectorAll('.aligne')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to =  getScrollTopByHref(event.target) - 80;

    scrollToPosition(to);
}

function scrollToPosition(to){
    // window.scroll({
    // top: to - 80,  
    // behavior: "smooth",
    // });
    smoothScrollTo(0, to);
}



function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}



/**

 * @param {int} endX 
 * @param {int} endY
 * @param {int} duration
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };




//MODAL:

function abrirModal() {
    document.getElementById('modal-').style.top = "0";

}

function fecharModal() {
    document.getElementById('modal-').style.top = "-100%";
}