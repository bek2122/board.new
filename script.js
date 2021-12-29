const board = document.querySelector('.board');

for(let i = 0; i < 500; i++) {
    let block = document.createElement('div');
    block.classList.add('box');
    board.appendChild(block);

    block.addEventListener('mouseover', () => {
        // block.style.background = 'red';


     
             let r = Math.round(Math.random() * (256 - 1) + 0)
     let g = Math.round(Math.random() * (256 - 1) + 0)
     let b = Math.round(Math.random() * (256 - 1) + 0)
     block.style.background =`rgb(${r},${g},${b})`;


    // block.style.background = rgb(r) + rgb(g) + rgb(b)
      
    // function (min, max) {
    // //   let r = Math.round(Math.random() * (min - 1) + max)
    // //  let g = Math.round(Math.random() * (256 - 1) + min)
    // //  let b = Math.round(Math.random() * (256 - 1) + max)

    // }
     
    })

    block.addEventListener('mouseleave', () => {
        block.style.background = '#1d1717';
    })

}

