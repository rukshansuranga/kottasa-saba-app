import { auth } from '@/auth';
import React from 'react'

async function Session() {
    const session = await auth();
    return (
        <div>
            <h3>Session Data</h3>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default Session
