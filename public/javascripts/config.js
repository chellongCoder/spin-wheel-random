const configSpin = [
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'},
    {'id': getId(),'fillStyle' : getRandomColor(), 'text' : 'Nguyễn Nhật Long'}
 ];

 function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }
 

 function getId () {
    return Math.floor(Math.random()*(999-100+1)+100);
 }

 function getRandomGift() {
    var myArray = [
       'p1', 
       'p2',
       'p3',
       'p4',
       'p5',
       'p6'
    ];
    return myArray[Math.floor(Math.random() * myArray.length)];

 }