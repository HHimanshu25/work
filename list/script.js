function tot(end){

    let total = 0;
    const accountsEl = document.querySelector('.accounts');
    if (accountsEl) {
        const children = accountsEl.children;
        for (let i = 0; i <(end); i++) {
        const child = children[i];
        if (child && child.children[1]) {
            const to = Number(child.children[1].innerHTML) || 0;
            if (!isNaN(to)) total += to;
        }
    }
    const totValEl = document.querySelector('.tot-val');
    if (totValEl) totValEl.innerHTML = total;
    localStorage.setItem("owntotal",total);
}
}
tot(3)

const nme = localStorage.getItem("sharenmae")
if(nme){
document.querySelector('.own-nam').innerHTML=nme;
}
let j = 3;

function addproduct(){

    let div = document.createElement('div')
    div.setAttribute('class','product');
    
    for(i=0; i<2; i++){
        let span = document.createElement('span')
        
        if(i == 0){
            span.setAttribute('class','pro-nam')
            span.innerHTML=prompt("enter value name")
        }
        else{
            span.setAttribute('class','pro-amo');
            span.innerHTML=Number(prompt('enter your product amount'))
        }
        div.appendChild(span)
    }
    let product = document.querySelector('.accounts');
    product.insertBefore(div,product.firstChild);    

    tot(j++);
}