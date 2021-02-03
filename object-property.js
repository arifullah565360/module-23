const hero = [
    { id: 21, name: 'maiomona' },
    { id: 25, name: 'mahi' },
    { id: 18, name: 'hafsa' },
    { id: 12, name: 'safi alom' }
];

const names = hero.map(s => s.name);
const ids = hero.map(z => z.id);
const namei = hero.find(s => s.id > 19);
console.log(namei);

