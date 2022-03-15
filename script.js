const jedi = [];
jedi [0] = 'Luke';
//jedi[jedi.length] = 'Luke'
jedi.push('Obe Won Kanobe');
jedi.unshift('Yoda');
console.log(jedi[1]);
jedi.pop();
jedi.shift();
console.log(jedi);

const sithLords = [
    'Darth Vader',
    'Darth Sidious',
    'Darth Maul'
];
const imperialOfficers = [
    `Grand Moff Tarkin`, 
    `Orson Krennic`
];
const starWarsVillians = sithLords.concat(imperialOfficers)
console.log(starWarsVillians);

console.log (
    starWarsVillians.slice(0,2)
);

const droids = {
    astromech: `R2-D2`,
    protocol: `C-3PO`,
    assassin: `IG-88`
}
console.log(droids[`astromech`]);
console.log(droids.protocol);

droids[`assassin`] = `IG-11`;
console.log(droids);

//BONUS

