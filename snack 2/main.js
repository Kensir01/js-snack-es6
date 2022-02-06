let squadra = [
    
    {
        nome: 'All Scars',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'AS Ereye',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Pro Secco',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Real MaiDrit',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

console.log(squadra);

let nuovoArraySquadra = [0];

for (let i = 0; i < squadra.length; i++){

    squadra[i].puntiFatti = Math.floor(Math.random() * 3) +1;
    squadra[i].falliSubiti = Math.floor(Math.random() * 3) +1;

    let {nome, falliSubiti} = squadra[i];
    nuovoArraySquadra.push({nome, falliSubiti});
    console.log(`${nome} ha subito ${falliSubiti} falli!`);

}
