import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchMettings() {
  try {

    const meetings = await prisma.meeting.findMany({
      orderBy: {
        meeting_id: 'desc',
      },
    })


    return meetings;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all people.');
  }
}