const list = document.querySelectorAll('.passive')
 list.forEach(item =>{
        item.addEventListener('click', (e) =>{
    if(item.classList.contains('passive')){
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active');
        item.classList.remove('passive');
    }else{
        item.classList.remove('active');
        item.classList.add('passive');
    }
    })
})