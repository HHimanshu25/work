let i ;
for(i=1; i<=4; i++){
    let num = document.querySelector(`.cust${i}`).children[2];
    let check = Number(num.innerHTML)
    if(check < 0){
        num.style.color='red';

    }
    else{
        num.style.color='rgb(3, 210, 9)'
    }
}