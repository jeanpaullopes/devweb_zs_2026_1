
const htmlBase =
`    <div>
        Hospede: {nome}<br/>
        quarto: {numeroQuarto}<br/>
        Data de entrada: {dataEntrada}<br/>
        Data de saída: {dataSaida}
    </div>
`;

for (let i = 0; i < dados.length; i++) {

}

dados.forEach((elemento)=>{
    let html = htmlBase
    .replace('{nome}', elemento.nome)
    .replace('{numeroQuarto}', elemento.quarto)
    .replace('{dataEntrada}', elemento.checkin)
    .replace('{dataSaida}', elemento.checkout);

    document.body.innerHTML += html;
});
//dados.forEach(funcao1);

function funcao1(elemento){

}
