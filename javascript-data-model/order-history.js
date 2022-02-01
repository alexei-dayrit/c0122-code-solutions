var orderHistory = [
  {
    orderDate: 'August 4, 2020',
    orderTotal: '$34.00',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredDate: 'Aug 8, 2020',
    items: [
      {
        type: 'book',
        name: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        price: '$31.55',
        returnWindow: 'Sep 7, 2020',
        imageUrl: null
      }
    ]
  },
  {
    orderDate: 'Jul 19, 2020',
    orderTotal: '$44.53',
    shipTo: 'JS Masher',
    orderNumber: '113-998426801280257',
    deliveredDate: 'Jul 20, 2020',
    items: [
      {
        type: 'book',
        name: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        price: '$41.33',
        returnWindow: 'Aug 19, 2020',
        imageUrl: null
      }
    ]
  },
  {
    orderDate: 'Jul 4, 2020',
    orderTotal: '$17.22',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredDate: 'Jul 7, 2020',
    items: [
      {
        type: 'hardware',
        itemName: 'Gamecube Controller Adapter',
        author: null,
        returnWindow: 'Aug 5, 2020',
        itemPrice: '$15.98',
        imageUrl: null
      }
    ]
  },
  {
    orderDate: 'July 3, 2020',
    orderTotal: '$138.93',
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredDate: 'Jul 5, 2020',
    items: [
      {
        type: 'hardware',
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        returnWindow: 'Aug 4, 2020',
        itemPrice: '$94.95',
        imageUrl: null
      },
      {
        type: 'book',
        itemName: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        returnWindow: 'Aug 4, 2020',
        itemPrice: '$33.99',
        imageUrl: null
      }]
  }
];

console.log('Order history # 1:', orderHistory[0]);
console.log('Order history # 2:', orderHistory[1]);
console.log('Order history # 3:', orderHistory[2]);
console.log('Order history # 4:', orderHistory[3]);
console.log('Items of order history # 4: ', orderHistory[3].items[1].author);

// Note for myself: type property is useful so that
// we won't need to keep putting author: null
