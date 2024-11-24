import Form from '@/app/ui/proposedProjectSessions/create-form';
import Breadcrumbs from '@/app/ui/project/breadcrumbs';
import { Metadata } from 'next';
import { fetchMettings } from '@/app/lib/actions/meetingAction';

export const metadata: Metadata = {
  title: 'Create Project',
};

export default async function Page() {
  const meetings = await fetchMettings();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/project' },
          {
            label: 'Create Project',
            href: '/project/create',
            active: true,
          },
        ]}
      />
      <Form meetings={meetings.map((m: any) => { return { id: m.meeting_id, name: m.name } })} />
    </main>
  );
}