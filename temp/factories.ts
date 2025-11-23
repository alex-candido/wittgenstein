import { faker } from '@faker-js/faker';
import { GenerationScope, PresentationStyle, Prisma, PrismaClient, Status, UserRole, Visibility } from '@prisma/client';

// Helper to get a random enum value
const getRandomEnumValue = <T extends Record<string, unknown>>(anEnum: T): T[keyof T] => {
  const enumValues = Object.values(anEnum) as T[keyof T][];
  return faker.helpers.arrayElement(enumValues);
};

// --- Manual Factories ---

export const userFactory = async (prisma: PrismaClient, data?: Partial<Prisma.UserCreateInput>) => {
  const defaults: Prisma.UserCreateInput = {
    uuid: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password_hash: faker.internet.password(),
    role: getRandomEnumValue(UserRole),
    status: getRandomEnumValue(Status),
  };
  return prisma.user.create({ data: { ...defaults, ...data } });
};

export const documentFactory = async (prisma: PrismaClient, data: Partial<Prisma.DocumentCreateInput> & { user: { connect: { id: number } } }) => {
  const defaults: Omit<Prisma.DocumentCreateInput, 'user'> = {
    uuid: faker.string.uuid(),
    title: faker.lorem.words({ min: 3, max: 8 }),
    visibility: getRandomEnumValue(Visibility),
    status: getRandomEnumValue(Status),
  };
  return prisma.document.create({ data: { ...defaults, ...data } });
};

export const generationFactory = async (prisma: PrismaClient, data: Partial<Prisma.GenerationCreateInput> & { document: { connect: { id: number } } }) => {
  const defaults: Omit<Prisma.GenerationCreateInput, 'document'> = {
    uuid: faker.string.uuid(),
    scope: getRandomEnumValue(GenerationScope),
    prompt: faker.lorem.paragraph(),
    outline: { content: faker.lorem.paragraphs(2, '\n\n') },
    ai_metadata: { tokens: faker.number.int({ min: 100, max: 1000 }), model: 'gemini-1.5-pro' },
    status: getRandomEnumValue(Status),
  };
  return prisma.generation.create({ data: { ...defaults, ...data } });
};

export const presentationFactory = async (prisma: PrismaClient, data: Partial<Prisma.PresentationCreateInput> & { user: { connect: { id: number } }; generation: { connect: { id: number } } }) => {
  const defaults: Omit<Prisma.PresentationCreateInput, 'user' | 'generation'> = {
    uuid: faker.string.uuid(),
    title: faker.lorem.words({ min: 5, max: 12 }),
    content: { slides: faker.lorem.paragraphs(3, '\n\n') },
    style: getRandomEnumValue(PresentationStyle),
    language: faker.helpers.arrayElement(['en-US', 'pt-BR', 'es-ES']),
    status: getRandomEnumValue(Status),
  };
  return prisma.presentation.create({ data: { ...defaults, ...data } });
};

