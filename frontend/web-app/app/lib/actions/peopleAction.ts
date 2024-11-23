import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchPeople() {
  try {
    const people = await prisma.people.findMany({
      orderBy: {
        person_id: 'desc',
      },
    })

    return people;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all people.');
  }
}