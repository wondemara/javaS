const heard_menu =document.querySelector('.heard_menu')
const menu_burger =document.querySelector('.menu_burger')
menu_burger.addEventListener('click',()=>{
    heard_menu.classList.toggle('active')
})

const image1 =document.querySelector('.image1')
const image2 =document.querySelector('.image2')
const image3 =document.querySelector('.image3')
const image =document.querySelector('.image')

image1.addEventListener('click',()=>{
    image.src=image1.src
    document.body.style.background = 'grey'
})
image2.addEventListener('click',()=>{
    image.src=image2.src
   document.body.style.background='rgb(233, 223, 211)'
})
image3.addEventListener('click',()=>{
    image.src=image3.src
    document.body.style.background = '#f1f1f1'
})