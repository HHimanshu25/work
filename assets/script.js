let i;
setInterval(() => {

    let profit = 0;
    let due = 0;
    for (i = 1; i <= 5; i++) {
        let num = document.querySelector(`.cust${i}`);
        if (num) {
            // num = num.children[2];  
            let check = Number(num.children[2].innerHTML)
            if (check < 0) {
                num.children[2].style.color = 'red';
                due = due + check;

            }
            else {
                num.children[2].style.color = 'rgb(3, 210, 9)'
                profit = profit + check;
            }
            document.querySelector('.num-adv').innerHTML = profit;
            document.querySelector(".num-due").innerHTML = due;
        }
    }
}, 50)


function nae(v) {
    let th = document.querySelector(`.cust${v}`).children[1].innerHTML
    localStorage.setItem("sharenmae", th);
    localStorage.setItem('nth', v);

}

function update() {
    let v = localStorage.getItem('nth');
    if (v) {
        const money = localStorage.getItem('owntotal');
        if (money) {
            document.querySelector(`.cust${v}`).children[2].innerHTML = money;
        }
    }
}
update();

function addpeople(p){
    let div = document.createElement('div')
    div.setAttribute('class',`cust cust${p}`)
    for(i=0; i<3; i++){
        let span = document.createElement('span')
        if(i=0){
            span.setAttribute('class','cusim')
        }
        if(i=1){
            span.setAttribute('class','cusnam')
        }
        if(i=2){
            span.setAttribute('class','money')
        }
        div.appendChild(span)
    }
    document.querySelector('.customer').append(div)
}


