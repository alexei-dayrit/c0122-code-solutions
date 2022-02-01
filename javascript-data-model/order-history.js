var orderHistory = [
  {
    orderDate: 'August 4, 2020',
    orderTotal: '$34.00',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredDate: 'Aug 8, 2020',
    itemName: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    returnWindow: 'Sep 7, 2020',
    itemPrice: '$31.55'
  },
  {
    orderDate: 'Jul 19, 2020',
    orderTotal: '$44.53',
    shipTo: 'JS Masher',
    orderNumber: '113-998426801280257',
    deliveredDate: 'Jul 20, 2020',
    itemName: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    returnWindow: 'Aug 19, 2020',
    itemPrice: '$41.33'
  },
  {
    orderDate: 'Jul 4, 2020',
    orderTotal: '$17.22',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredDate: 'Jul 7, 2020',
    itemName: 'Gamecube Controller Adapter',
    author: 'null',
    returnWindow: 'Aug 5, 2020',
    itemPrice: '$15.98'
  },
  {
    orderDate: 'July 3, 2020',
    orderTotal: '$138.93',
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredDate: 'Jul 5, 2020',
    returnWindow: 'Aug 4, 2020',
    items: [
      {
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: 'null',
        itemPrice: '$94.95'
      },
      {
        itemName: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        itemPrice: '$33.99'
      }]
  }
];

console.log('Order history # 1:', orderHistory[0]);
console.log('Order history # 2:', orderHistory[1]);
console.log('Order history # 3:', orderHistory[2]);
console.log('Order history # 4:', orderHistory[3]);
console.log('Items of order history # 4: ', orderHistory[3].items[1].author);
