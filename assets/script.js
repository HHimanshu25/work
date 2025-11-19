let i;
let profit = 0;
let due = 0;
for (i = 1; i <= 4; i++) {
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


function nae(v){
    let th = document.querySelector(`.cust${v}`).children[1].innerHTML
    localStorage.setItem("sharenmae",th);    
    

}
// function reniew(){
//     const money = localStorage.getItem('owntotal');
//     if(money){
//         document.querySelector(`.cust${v}`).children[2].innerHTML = money;
//     }
    
// }


