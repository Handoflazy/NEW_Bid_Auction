
//Lay gia tri tu form nhap gia
const bidForm = document.querySelector('.bidding-place #bid-form');
const bidMes = document.querySelector('.bidding-place #input-price');

bidForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = bidMes.value
    console.log(message)
    socket.emit('bid-price', {message:message})
})