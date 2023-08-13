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

// les animations de mon footer
const connect =document.querySelector('.connexion')
const textt =document.querySelector('.h3')
const inscription =document.querySelector('.inscription')
const texttt =document.querySelector('.h33')
const titt =document.querySelector('.titre')
const connexion_corp =document.querySelector('.connexion_corp')
const incription_corp =document.querySelector('.incription_corp')
const pas =document.querySelector('.pas')
const pass =document.querySelector('.pass')
function founction1() {
    connect.style.background ='black'
    textt.style.color ='#fff'
    inscription.style.background ='#fff'
    texttt.style.color ='black'
    titt.innerText = 'Connexion'
    connexion_corp.classList.add('vien')
    incription_corp.classList.add('part')
}
connect.addEventListener('click',()=>{
   founction1()
})
pass.addEventListener('click',()=>{
   founction1()
})
// pour l'inscription de mon footer
function mafonction (va1,va2,va3,va4,va5,va6,va7){
    va1.style.background ='black'
    va2.style.color ='#fff'
    va3.style.background ='#fff'
    va4.style.color ='black'
    va5.innerText = 'Inscription' 
    va6.classList.remove('vien')
    va7.classList.remove('part')
}
inscription.addEventListener('click',()=>{
  mafonction(inscription,texttt,connect,textt,titt,connexion_corp,incription_corp)
})
pas.addEventListener('click',()=>{
    mafonction(inscription,texttt,connect,textt,titt,connexion_corp,incription_corp)
})