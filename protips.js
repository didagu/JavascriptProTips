//destructing
const animal = {
    name: 'robert',
    gender: 'male',
    age: 2,
    height: '50cm',
    family: 'carnivorous',
    specie: 'marsupilians'
}

function getAgeAndGender({
    age,
    gender
}) {
    console.log(`The animal age is: ${age} and gender ia ${gender}`);
}