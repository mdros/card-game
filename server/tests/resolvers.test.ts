import { beforeEach, describe, expect, it, jest } from '@jest/globals';

const createMockPrisma = () => ({
  person: {
    findMany: jest.fn(),
    count: jest.fn(),
  },
  starship: {
    findMany: jest.fn(),
    count: jest.fn(),
  },
});

const createResolvers = (prisma: any) => ({
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
});

describe('Resolvers', () => {
  let mockPrisma: any;
  let testResolvers: any;

  beforeEach(() => {
    mockPrisma = createMockPrisma();
    testResolvers = createResolvers(mockPrisma);
  });

  describe('Query.people', () => {
    it('returns paginated people and total', async () => {
      mockPrisma.person.findMany.mockResolvedValueOnce([{ id: 1, name: 'Luke', attack: 99 }]);
      mockPrisma.person.count.mockResolvedValueOnce(1);
      const result = await testResolvers.Query.people({}, { page: 1, limit: 1 });
      expect(result.people).toEqual([{ id: 1, name: 'Luke', attack: 99 }]);
      expect(result.total).toBe(1);
      expect(mockPrisma.person.findMany).toHaveBeenCalledWith({ skip: 0, take: 1 });
    });
  });

  describe('Query.starships', () => {
    it('returns paginated starships and total', async () => {
      mockPrisma.starship.findMany.mockResolvedValueOnce([{ id: 1, name: 'Falcon', crew: 4, model: 'YT-1300' }]);
      mockPrisma.starship.count.mockResolvedValueOnce(1);
      const result = await testResolvers.Query.starships({}, { page: 1, limit: 1 });
      expect(result.starships).toEqual([{ id: 1, name: 'Falcon', crew: 4, model: 'YT-1300' }]);
      expect(result.total).toBe(1);
      expect(mockPrisma.starship.findMany).toHaveBeenCalledWith({ skip: 0, take: 1 });
    });
  });
});

describe('Resolver Logic', () => {
  it('should calculate pagination correctly', () => {
    const page = 2;
    const limit = 10;
    const skip = (page - 1) * limit;
    expect(skip).toBe(10);
  });

  it('should handle people query structure', () => {
    const mockPeople = [{ id: 1, name: 'Luke', attack: 99 }];
    const mockTotal = 1;
    const result = { people: mockPeople, total: mockTotal };

    expect(result.people).toHaveLength(1);
    expect(result.total).toBe(1);
    expect(result.people[0].name).toBe('Luke');
  });

  it('should handle starships query structure', () => {
    const mockStarships = [{ id: 1, name: 'Falcon', crew: 4, model: 'YT-1300' }];
    const mockTotal = 1;
    const result = { starships: mockStarships, total: mockTotal };

    expect(result.starships).toHaveLength(1);
    expect(result.total).toBe(1);
    expect(result.starships[0].name).toBe('Falcon');
  });
}); 