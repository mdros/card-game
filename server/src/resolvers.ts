import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    people: async (_: any, { page = 1, limit = 10 }: { page: number; limit: number }) => {
      const skip = (page - 1) * limit;
      const [people, total] = await Promise.all([
        prisma.person.findMany({ skip, take: limit }),
        prisma.person.count(),
      ]);
      return { people, total };
    },
    starships: async (_: any, { page = 1, limit = 10 }: { page: number; limit: number }) => {
      const skip = (page - 1) * limit;
      const [starships, total] = await Promise.all([
        prisma.starship.findMany({ skip, take: limit }),
        prisma.starship.count(),
      ]);
      return { starships, total };
    },
  },
}; 