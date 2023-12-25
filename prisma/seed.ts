import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Milk Chocolade',
      price: 55,
      size: 100,
      photo: 'chocolate1.jpg',
      description: 'Milk chocolade from shweizland',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Dark Chocolade',
      price: 25,
      size: 100,
      photo: 'chocolate2.jpg',
      description: 'Dark chocolade from shweizland',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Orange Chocolade',
      price: 35,
      size: 200,
      photo: 'chocolate3.jpg',
      description: 'Orange chocolade witch oranges parts',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Nut Chocolade',
      price: 15,
      size: 50,
      photo: 'chocolate4.jpg',
      description: 'Nut chocolade witch with whole hazelnuts',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Oreo Chocolade',
      price: 33,
      size: 200,
      photo: 'chocolate5.jpg',
      description: 'Oreo chocolade iitch part of oreo cakes',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();
