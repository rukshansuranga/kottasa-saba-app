import Form from '@/app/ui/project/create-form';
import Breadcrumbs from '@/app/ui/project/breadcrumbs';
import { Metadata } from 'next';
import { fetchPeople } from '@/app/lib/actions/peopleAction';
import { fetchSession } from '@/app/lib/api/proposalSessionApi';

export const metadata: Metadata = {
  title: 'Create Project',
};

export default async function Page() {
  const [people, sessions] = await Promise.all([
    fetchPeople(),
    fetchSession()
  ]);

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
      <Form people={people.map(m => { return { id: m.person_id, name: m.firstName } })}
        sessions={sessions.map(m => { return { id: m.proposed_session_id, name: m.name } })}
      />
    </main>
  );
}