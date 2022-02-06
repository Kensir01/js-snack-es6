let listaBici = [

    {
        nomeBici: 'Idreipte',
        pesoBici: 10
    },

    {
        nomeBici: 'Benke',
        pesoBici: 8
    },

    {
        nomeBici: 'Yuögpu',
        pesoBici: 6
    },

    {
        nomeBici: 'Micyöfco',
        pesoBici: 10
    },

    {
        nomeBici: 'Gofgo',
        pesoBici: 10
    },

    {
        nomeBici: 'Anlo',
        pesoBici: 10
    }
];

console.log(listaBici);


let biciLeggera = listaBici[0];

for (let i = 0; i < listaBici.length; i++) {
    if (listaBici[i].pesoBici < biciLeggera.pesoBici) {
        biciLeggera = listaBici[i];
    }
};

const {nomeBici, pesoBici} = biciLeggera;

console.log(`La bici più leggera è ${nomeBici} con un peso pari a ${pesoBici}`);
document.getElementById('bici').innerHTML = `La bici più leggera è ${nomeBici} con un peso pari a ${pesoBici}`;


