import Form from '@/app/ui/project/edit-form';
import Breadcrumbs from '@/app/ui/project/breadcrumbs';
import { fetchPeople } from '@/app/lib/actions/peopleAction';
import { fetchProjectById } from '@/app/lib/api/projectApi';
import { notFound } from 'next/navigation';
import { fetchSession } from '@/app/lib/api/proposalSessionApi';

export default async function Page(props: { params: Promise<{ id: string }> }) {

  const params = await props.params;
  const id = params.id;
  const [project, people, sessions] = await Promise.all([
    fetchProjectById(id),
    fetchPeople(),
    fetchSession()
  ]);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'People', href: '/project' },
          {
            label: 'Edit Project',
            href: `/project/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form project={project}
        people={people.map((m: any) => { return { id: m.person_id, name: m.firstName } })}
        sessions={sessions.map((m: any) => { return { id: m.proposed_session_id, name: m.name } })} />
    </main>
  );
}