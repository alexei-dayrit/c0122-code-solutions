const graduate = credential => {
  return fullName => `${fullName}, ${credential}`;
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Dan Abramov');
lawSchool('Ryan Florence');

const dan = medicalSchool('Dan Abramov');
const ryan = lawSchool('Ryan Florence');

console.log(dan);
console.log(ryan);
