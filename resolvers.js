const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


let characters = [
    { id: '1', name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
    { id: '2', name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
    { id: '3', name: 'Summer Smith', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' }
  ];
  

const resolvers = {
    Query: {
        characters: () => characters,
    },

Mutation : {
    addUsers : (_,{detailsinp})=>
     console.log(detailsinp)
}

  };
  
  module.exports = resolvers;
  