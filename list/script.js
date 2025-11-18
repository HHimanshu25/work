let total = 0;
const accountsEl = document.querySelector('.accounts');
if (accountsEl) {
    const children = accountsEl.children;
    for (let i = 0; i < Math.min(3, children.length); i++) {
        const child = children[i];
        if (child && child.children[1]) {
            const to = Number(child.children[1].innerHTML) || 0;
            if (!isNaN(to)) total += to;
        }
    }
    const totValEl = document.querySelector('.tot-val');
    if (totValEl) totValEl.innerHTML = total;
}

const nme = localStorage.getItem("sharenmae")
if(nme){
document.querySelector('.own-nam').innerHTML=nme;
}