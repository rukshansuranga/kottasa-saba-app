import Form from '@/app/ui/proposedProjectSessions/edit-form';
import Breadcrumbs from '@/app/ui/proposedProjectSessions/breadcrumbs';
import { notFound } from 'next/navigation';
import { fetchMettings } from '@/app/lib/actions/meetingAction';
import { fetchProposedProjectById } from '@/app/lib/api/proposalSessionApi';

export default async function Page(props: { params: Promise<{ id: string }> }) {

  const params = await props.params;
  const id = params.id;
  const [session, meetings] = await Promise.all([
    fetchProposedProjectById(id),
    fetchMettings(),
  ]);

  if (!session) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Edit Proposed Session', href: '/proposedProjectSessions' },
          {
            label: 'Edit Proposed Session',
            href: `/proposedProjectSessions/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form meetings={meetings.map(m => { return { id: m.meeting_id, name: m.name } })}
        session={session} />
    </main>
  );
}