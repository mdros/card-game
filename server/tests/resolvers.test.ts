import { PrismaClient } from '@prisma/client';
import { resolvers } from '../src/resolvers';

jest.mock('@prisma/client');
const mockPrisma = {
  person: {
    findMany: jest.fn(),
    count: jest.fn(),
  },
  starship: {
    findMany: jest.fn(),
    count: jest.fn(),
  },
};
(PrismaClient as any).mockImplementation(() => mockPrisma);

describe('Resolvers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Query.people', () => {
    it('returns paginated people and total', async () => {
      mockPrisma.person.findMany.mockResolvedValueOnce([{ id: 1, name: 'Luke', attack: 99 }]);
      mockPrisma.person.count.mockResolvedValueOnce(1);
      const result = await resolvers.Query.people({}, { page: 1, limit: 1 });
      expect(result.people).toEqual([{ id: 1, name: 'Luke', attack: 99 }]);
      expect(result.total).toBe(1);
      expect(mockPrisma.person.findMany).toHaveBeenCalledWith({ skip: 0, take: 1 });
    });
  });

  describe('Query.starships', () => {
    it('returns paginated starships and total', async () => {
      mockPrisma.starship.findMany.mockResolvedValueOnce([{ id: 1, name: 'Falcon', crew: 4, model: 'YT-1300' }]);
      mockPrisma.starship.count.mockResolvedValueOnce(1);
      const result = await resolvers.Query.starships({}, { page: 1, limit: 1 });
      expect(result.starships).toEqual([{ id: 1, name: 'Falcon', crew: 4, model: 'YT-1300' }]);
      expect(result.total).toBe(1);
      expect(mockPrisma.starship.findMany).toHaveBeenCalledWith({ skip: 0, take: 1 });
    });
  });
}); 