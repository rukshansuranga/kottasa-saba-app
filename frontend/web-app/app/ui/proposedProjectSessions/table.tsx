import { UpdateProposedProjectSessions, DeleteProposedProjectSessions } from '@/app/ui/proposedProjectSessions/buttons';
import { fetchProposedProjectSessions } from '@/app/lib/api/proposalSessionApi';

export default async function ProposedProjectSessionTable() {
  const sessions = await fetchProposedProjectSessions();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">

          <table data-cy='projectSessionTable' className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Meeting Name
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {sessions?.map((session: any) => (
                <tr
                  key={session.proposed_session_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {session.proposed_session_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {session.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {session.meeting_id}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProposedProjectSessions id={session.proposed_session_id} />
                      <DeleteProposedProjectSessions id={session.proposed_session_id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
