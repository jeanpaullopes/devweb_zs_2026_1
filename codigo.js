let a = 'ola';
function dizOla() {
    alert(a);
}
let demo = (val) =>{
    alert(val);
}

//const teclas = [];
//const teclas2 = new Array();
const teclas3 = ['1','2','3','4','5','6',
    '7','8','9','0'];
//teclas3.push();  
const divTeclas = document.getElementById('divTeclas') ;

for ( let i = 0; i < teclas3.length; i++) {
//alert(teclas3[i]);
/*
    divTeclas.innerHTML +=
`<button 
onclick="display2('${teclas3[i]}')">
${teclas3[i]}</button>`;
*/
const btn = document.createElement('button');
btn.innerHTML = teclas3[i];
btn.onclick = function() {
    display2(teclas3[i]);
}
divTeclas.appendChild(btn);

}