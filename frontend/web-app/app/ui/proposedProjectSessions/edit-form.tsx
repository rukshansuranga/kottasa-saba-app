'use client';

import { CustomerField } from '@/app/lib/definitions';
import {
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

import { updateProposedSession } from '@/app/lib/actions/projectSessionAction';
import { ProposedProjectSessionForm } from '@/app/lib/coreDefinitions';

export default function EditProposedSessionForm({
  meetings,
  session
}: {
  meetings: CustomerField[];
  session: ProposedProjectSessionForm;
}) {

  const updateProposedSessionWithId = updateProposedSession.bind(null, session.proposed_session_id);

  return (
    <form id='projectSessionEditForm' action={updateProposedSessionWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                data-cy='name'
                defaultValue={session.name}
                placeholder="Enter Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Session */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose Meeting
          </label>
          <div className="relative">
            <select
              id="meeting"
              name="meeting_id"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={session.meeting_id}
            >
              <option value="" disabled>
                Select Session
              </option>
              {meetings.map((meeting: CustomerField) => (
                <option key={meeting.id} value={meeting.id}>
                  {meeting.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Proposed Session</Button>
      </div>
    </form>
  );
}
