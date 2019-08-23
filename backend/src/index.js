const express = require('express'); // load express module
const homes = express(); // call express funct

const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
homes.use(cors(corsOptions))

const hus1 = {
rooms: [
{ 
name: 'vardagsrum', 
temperature: '21', 
humidity: '0.1'
},
{ 
name: 'kök', 
temperature: '27', 
humidity: '0.77 ' 
}
]};

const hus2 = {
rooms: [
{ 
name: 'vardagsrum', 
temperature: '22', 
humidity: '0.2'
},
{ 
name: 'kök', 
temperature: '28', 
humidity: '0.88 ' 
}
]};

homes.get('/homes/hus1/rooms', (req, res) => { 
const hus1AllRooms = hus1.rooms;
res.send(hus1AllRooms);
});

homes.get('/homes/hus2/rooms', (req, res) => { 
const hus2AllRooms = hus2.rooms;
res.send(hus2AllRooms);
});

const port = process.env.PORT || 3000;
homes.listen(port, () => console.log(`Listen on port ${port}`)); 