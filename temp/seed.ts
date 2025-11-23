import { PrismaClient } from '@prisma/client';
import {
  documentFactory,
  generationFactory,
  presentationFactory,
  userFactory,
} from './factories';

const prisma = new PrismaClient();

async function main(quantity: number = 5) {
  console.log(`Start seeding ${quantity} users and their related data...`);

  // Clean up existing data
  await prisma.presentation.deleteMany();
  await prisma.generation.deleteMany();
  await prisma.document.deleteMany();
  await prisma.user.deleteMany();
  console.log('Database cleaned.');

  for (let i = 0; i < quantity; i++) {
    const user = await userFactory(prisma);
    console.log(`Created user: ${user.username}`);

    const document = await documentFactory(prisma, {
      user: { connect: { id: user.id } },
    });
    console.log(`  Created document "${document.title}" for user ${user.username}`);

    const generation = await generationFactory(prisma, {
      document: { connect: { id: document.id } },
    });
    console.log(`    Created generation for document "${document.title}"`);

    const presentation = await presentationFactory(prisma, {
      generation: { connect: { id: generation.id } },
      user: { connect: { id: user.id } },
    });
    console.log(`      Created presentation "${presentation.title}"`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });