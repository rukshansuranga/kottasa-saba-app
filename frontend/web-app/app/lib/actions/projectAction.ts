'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const FormSchema = z.object({
  project_id: z.string(),
  name: z.string().min(1, { message: 'Name is required' }),
  title: z.string(),
  proposedDate: z.string(),
  proposedBy: z.string(),
  secondedBy: z.string(),
  //status: z.enum(['deactive', 'active']),
  status: z.string().nullable(),
  proposed_session_id: z.string(),
});

const CreateProject = FormSchema.omit({ project_id: true });

export async function createProject(prevState: State, formData: FormData) {
  //const rawFormData = Object.fromEntries(formData.entries())

  const validatedFields = CreateProject.safeParse({
    name: formData.get('name'),
    title: formData.get('title'),
    proposedDate: formData.get('proposedDate'),
    proposedBy: formData.get('proposedBy'),
    secondedBy: formData.get('secondedBy'),
    status: formData.get('status'),
    proposed_session_id: formData.get('proposed_session_id')
  });



  console.log('validation fields', validatedFields, validatedFields.error)

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log(validatedFields.error.issues);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { name, title, proposedDate, proposedBy, secondedBy, status, proposed_session_id } = validatedFields.data;
  try {

    console.log('create f')

    await prisma.project.create({
      data: {
        name: name,
        title: title,
        proposedDate: new Date(proposedDate),
        proposedBy: proposedBy,
        secondedBy: secondedBy,
        status: status,
        proposed_session_id: proposed_session_id
      },
    })

  } catch (error) {

    console.log(error)

    return {
      message: 'Database Error: Failed to Create Project.',
    };
  }


  revalidatePath('/project');
  redirect('/project');
}


const UpdateProject = FormSchema.omit({ project_id: true });

export async function updateProject(id: string, formData: FormData) {

  console.log('form update ', id, formData)

  const { name, title, proposedDate, proposedBy, secondedBy, status, proposed_session_id } = UpdateProject.parse({
    name: formData.get('name'),
    title: formData.get('title'),
    proposedDate: formData.get('proposedDate'),
    proposedBy: formData.get('proposedBy'),
    secondedBy: formData.get('secondedBy'),
    status: formData.get('status'),
    proposed_session_id: formData.get('proposed_session_id')
  });

  try {

    await prisma.project.update({
      where: { project_id: id },
      data: {
        name: name,
        title: title,
        proposedDate: new Date(proposedDate),
        proposedBy: proposedBy,
        secondedBy: secondedBy,
        status: status,
        proposed_session_id: proposed_session_id
      },

    })

  } catch (error) {
    console.log(error)
    return {
      message: 'Database Error: Failed to Update Project.',
    };
  }


  revalidatePath('/project');
  redirect('/project');
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { project_id: id },
    })

  } catch (error) {
    console.log(error)
    return {
      message: 'Database Error: Failed to delete Project.',
    };
  }

  revalidatePath('/project');
}

export type State = {
  errors?: {
    name?: string[];
    title?: string[];
    proposedDate?: string[];
    proposedBy?: string[];
    secondedBy?: string[];
    status?: string[];
    proposed_project_session_id?: string[];
  };
  message?: string | null;
};