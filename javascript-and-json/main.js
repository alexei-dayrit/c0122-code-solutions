var books = [
  {
    isbn: '123',
    title: 'abc',
    author: 'Reyna'
  },
  {
    isbn: '456',
    title: 'def',
    author: 'Neon'
  },
  {
    isbn: '789',
    title: 'ghi',
    author: 'Jett'
  }
];

console.log('books array:', books);
console.log('books array type:', typeof books);
console.log('JSON books string:', JSON.stringify(books));
console.log('JSON books type:', typeof JSON.stringify(books));

var stringObject = '{"Student": [{"ID": 1234, "name": "Omen"}]}';

console.log('JSONstring:', stringObject);
console.log('JSONstring type:', typeof stringObject);

console.log('JSON parse result:', JSON.parse(stringObject));
console.log('JSON parse type:', typeof JSON.parse(stringObject));
