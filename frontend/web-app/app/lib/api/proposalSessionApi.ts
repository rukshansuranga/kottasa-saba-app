
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchProposedProjectSessions() {


  try {


    const projects = await prisma.proposalSession.findMany({
      select: {
        proposed_session_id: true,
        name: true,
        meeting_id: true
      },
      orderBy: [
        {
          createdAt: "desc", // or pass "asc" to order ascendingly
        },
      ],
    })

    return projects;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch proposal project sessions ${error}`);
  }
}

export async function fetchProposedProjectById(id: string) {

  try {

    const session = await prisma.proposalSession.findUnique({
      select: {
        proposed_session_id: true,
        name: true,
        meeting_id: true
      },
      where: {
        proposed_session_id: id
      }
    })

    return session;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchSession() {
  try {
    // const data = await sql<CustomerField>`
    //     SELECT
    //       proposed_project_session_id as id,
    //       name
    //     FROM ProposedProjectSession
    //     ORDER BY name ASC
    //   `;

    const projects = await prisma.proposalSession.findMany({
      select: {
        proposed_session_id: true,
        name: true
      },
      orderBy: {
        name: 'asc'
      }
    })

    return projects;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all people.');
  }
}