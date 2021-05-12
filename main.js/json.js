document.querySelector('.burger-btn').addEventListener('click',()=>{
    document.querySelector('.burger-btn').classList.toggle('is-open')
    document.querySelector('.sitenav').classList.toggle('active')
    document.querySelector('.btn').classList.toggle('active')
    document.querySelector('body').classList.toggle('none')
})