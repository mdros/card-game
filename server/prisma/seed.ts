import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const people = [
  { name: "Luke Skywalker", attack: 85 },
  { name: "Leia Organa", attack: 70 },
  { name: "Darth Vader", attack: 99 },
  { name: "Yoda", attack: 95 },
];

const starships = [
  { name: "Millennium Falcon", crew: 4, model: "YT-1300 light freighter" },
  { name: "Star Destroyer", crew: 47060, model: "Imperial I-class Star Destroyer" },
  { name: "X-wing", crew: 1, model: "T-65 X-wing" },
  { name: "TIE Fighter", crew: 1, model: "Twin Ion Engine Fighter" },
];

async function main() {
  await prisma.person.deleteMany();
  await prisma.starship.deleteMany();
  await prisma.person.createMany({ data: people });
  await prisma.starship.createMany({ data: starships });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 