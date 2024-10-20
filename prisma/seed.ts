import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

function getProducts() {
  return [
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Cake with chocolade',
      price: 27,
      category: 'cake',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo:
        'cake_choco1.jpg cake_choco2.jpg cake_choco3.jpg cake_choco4.jpg cake_choco5.jpg',
    },
    {
      id: '118ed66f-36cc-4862-8542-710997d8f72b',
      name: 'Cake',
      price: 300,
      category: 'cake',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'cake1.jpg cake2.jpg cake3.jpg cake4.jpg cake5.jpg cake6.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Candy',
      price: 12,
      category: 'candy',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'candy1.jpg candy2.jpg candy3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Cupcake',
      price: 22,
      category: 'cake',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'cupcake1.jpg cupcake2.jpg cupcake3.jpg cupcake4.jpg cupcake5.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Dark chockolate',
      price: 17,
      category: 'chocolate',
      isNew: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo:
        'dark_chockolade1.jpg dark_chockolade2.jpg dark_chockolade3.jpg dark_chockolade4.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Donut',
      price: 15,
      category: 'cake',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'donut1.jpg donut2.jpg donut3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      name: 'Ice cone',
      price: 8,
      category: 'icecream',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'ice_cone1.jpg ice_cone2.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      name: 'Icecream',
      price: 12,
      category: 'icecream',
      isNew: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'icecream1.jpg icecream2.jpg icecream3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'Jelly candy',
      price: 5,
      category: 'candy',
      isNew: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'jelly_candy1.jpg jelly_candy2.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'Lollypop',
      price: 3,
      category: 'candy',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'lollypop1.jpg lollypop2.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      name: 'Milk chocolade',
      price: 30,
      category: 'chocolate',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'milk_chocolade1.jpg milk_chocolade2.jpg milk_chocolade3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      name: 'Mix chocolades',
      price: 33,
      category: 'chocolate',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'mix_chocolads1.jpg mix_chocolads2.jpg mix_chocolads3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      name: 'Oreo',
      price: 18,
      category: 'cake',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'oreo1.jpg oreo2.jpg oreo3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17268',
      name: 'Pancakes',
      price: 3,
      category: 'cake',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'pancakes1.jpg pancakes2.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17269',
      name: 'White chocolade',
      price: 3,
      category: 'chocolate',
      isNew: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit auctor finibus.',
      photo: 'white_chockolade1.jpg',
    },
  ];
}

function getUsers() {
  return [
    {
      id: 'f4c05e45-cd90-473c-bae2-959c977ca811',
      email: 'guest@guest.guest',
      role: Role.USER,
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    }),
  );
}

seed();
