import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchProjectById(id: string) {

  console.log('id', id)

  try {
    // const data = await sql<ProjectForm>`
    //     SELECT
    //       project_id,
    //       name,
    //       title,
    //       proposedDate,
    //       proposedBy,
    //       secondedBy,
    //       status,
    //       proposed_project_session_id
    //     FROM Project
    //     WHERE project_id = ${id};
    //   `;

    const project = await prisma.project.findUnique({
      select: {
        project_id: true,
        name: true,
        title: true,
        proposedDate: true,
        proposedBy: true,
        secondedBy: true,
        status: true,
        proposed_session_id: true
      },
      where: {
        project_id: id
      }

    })

    return project;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects() {
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    const projects = await prisma.project.findMany({
      select: {
        project_id: true,
        name: true,
        title: true,
        proposedDate: true,
        proposedBy: true,
        secondedBy: true,
        status: true,
        proposed_session_id: true
      }
    })

    return projects;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchProjectPages(query: string) {
  try {
    //   const count = await sql`SELECT COUNT(*)
    //   FROM Project
    // `;

    console.log(query)

    const count = await prisma.project.count();

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');

  }
}