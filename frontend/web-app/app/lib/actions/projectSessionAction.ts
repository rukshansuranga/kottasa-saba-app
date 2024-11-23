'use server';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { z } from 'zod';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FormState, fromErrorToFormState, toFormState } from '@/app/utils/to-form-state';

const FormSchema = z.object({
  proposed_project_session_id: z.number(),
  name: z.string().min(1, { message: 'Name is required' }),
  meeting_id: z.string(),
});

const CreateProject = FormSchema.omit({ proposed_project_session_id: true });

export async function createProposedProjectSession(prevState: FormState, formData: FormData) {
  //const rawFormData = Object.fromEntries(formData.entries())

  console.log('create form', formData)
  try {

    const { name, meeting_id } = CreateProject.parse({
      name: formData.get('name'),
      meeting_id: formData.get('meeting_id')
    });

    await prisma.proposalSession.create({
      data: {
        name: name,
        meeting_id: meeting_id
      },
    })

  } catch (error) {
    console.log(error)
    return fromErrorToFormState(error);;
  }

  revalidatePath('/proposedProjectSessions');
  redirect('/proposedProjectSessions');

  return toFormState('SUCCESS', 'Message created');
}

const UpdateProposedSession = FormSchema.omit({ proposed_project_session_id: true });

export async function updateProposedSession(id: string, formData: FormData) {

  console.log('form', id, formData)

  const { name, meeting_id } = UpdateProposedSession.parse({
    name: formData.get('name'),
    meeting_id: formData.get('meeting_id')
  });

  console.log('form xx', name, meeting_id)

  try {
    //   await sql`
    //   UPDATE ProposedProjectSession
    //   SET name = ${name}, meeting_id = ${meeting_id}
    //   WHERE proposed_project_session_id = ${id}
    // `;

    await prisma.proposalSession.update({
      where: { proposed_session_id: id },
      data: {
        name: name,
        meeting_id: meeting_id
      },

    })

  } catch (error) {
    console.log(222, error)
    return {
      message: 'Database Error: Failed to Update Project.',
    };
  }

  console.log(123);


  revalidatePath('/proposedProjectSessions');
  redirect('/proposedProjectSessions');
}

export async function deleteProposedSession(id: string) {
  try {
    await prisma.proposalSession.delete({
      where: { proposed_session_id: id },
    })

  } catch (error) {
    console.log(error)
    return {
      message: 'Database Error: Failed to delete Project.',
    };
  }

  revalidatePath('/proposedProjectSessions');
}

// export type State = {
//   errors?: {
//     name?: string[];
//     meeting_id?: string[];
//   };
//   message?: string | null;
// };

// export type State = {
//   status: 'UNSET' | 'SUCCESS' | 'ERROR';
//   fieldErrors?: Record<string, string[] | undefined>;
//   message?: string | null;
//   timestamp: number;
// };