fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json())
  .then(users => {
    console.log('data:', users);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Sample layout from QnA
fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(bulbasaur => console.log('pokemon:', bulbasaur))
  .catch(err => console.error('Error:', err));
