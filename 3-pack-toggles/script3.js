const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',function(){
    //change the website color
    document.body.classList.toggle('switch');
})