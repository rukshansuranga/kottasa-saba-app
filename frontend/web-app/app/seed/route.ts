
// import { districts, divisionalSecretariats, gnDivision, kottasaSabaWaraya, people, elections, leaders, meetings, attendence, proposalSessions, projects} from '../lib/placeholder-data';

// const client = await db.connect();

// async function seedDistrict() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;

//   console.log

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS District (
//       district_id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       title VARCHAR(100) NOT NULL
//     );
//   `;

//   const insertedDistrict = await Promise.all(
//     districts.map(async (district) => {

//       return client.sql`
//         INSERT INTO District (name, title)
//         VALUES (${district.name}, ${district.title})
//         ;
//       `;
//     }),
//   );

//   return insertedDistrict;
// }

// async function seedDivisionSectory() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS DivisionalSecretariats (
//       divisionalsecretariats_id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       title VARCHAR(100) NOT NULL,
//       district_id int
//     );
//   `;

//   const insertedDivision = await Promise.all(
//     divisionalSecretariats.map(async (electoral) => {

//       return client.sql`
//         INSERT INTO DivisionalSecretariats (name, title, district_id)
//         VALUES (${electoral.name}, ${electoral.title}, ${electoral.districtId})
//         ;
//       `;
//     }),
//   );

//   return insertedDivision;
// }

// async function seedGNDivision() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS GNDivision (
//       gndivision_id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       title VARCHAR(100) NOT NULL,
//       divisionalsecretariats_id int
//     );
//   `;

//   const insertedDistrict = await Promise.all(
//     gnDivision.map(async (gn) => {

//       return client.sql`
//         INSERT INTO GNDivision (name, title, divisionalsecretariats_id)
//         VALUES (${gn.name}, ${gn.title}, ${gn.divisionalSecretariatId})
//         ;
//       `;
//     }),
//   );

//   return insertedDistrict;
// }

// async function seedKottasaSaba() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS KottasaSaba (
//       kottasa_id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       title VARCHAR(100) NOT NULL,
//       gndivision_id int
//     );
//   `;

//   const insertedDistrict = await Promise.all(
//     gnDivision.map(async (gn) => {

//       return client.sql`
//         INSERT INTO KottasaSaba (name, title, gndivision_id)
//         VALUES (${gn.name}, ${gn.title}, ${gn.divisionalSecretariatId})
//         ;
//       `;
//     }),
//   );

//   return insertedDistrict;
// }

// async function seedKottasaSabaWaraya() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS KottasaSabaWaraya (
//       kottasa_waraya_id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       startDate DATE NOT NULL,
//       endDate DATE NOT NULL,
//       kottasa_id int
//     );
//   `;

//   const insertedKotasaSabaWaraya = await Promise.all(
//     kottasaSabaWaraya.map(async (waraya) => {

//       return client.sql`
//         INSERT INTO KottasaSabaWaraya (name, startDate, endDate, kottasa_id)
//         VALUES (${waraya.name}, ${waraya.startDate}, ${waraya.endDate}, ${waraya.kottasa_id})
//         ;
//       `;
//     }),
//   );

//   return insertedKotasaSabaWaraya;
// }

// async function People() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS People (
//       person_id SERIAL PRIMARY KEY,
//       firstName VARCHAR(100) NOT NULL,
//       lastName VARCHAR(100) ,
//       nicName VARCHAR(100) ,
//       telephone VARCHAR(15) ,
//       mobile VARCHAR(15) NOT NULL,
//       email VARCHAR(100),
//       bithday DATE ,
//       nic VARCHAR(15),
//       status VARCHAR(15),
//       gndivision_id int,
//       kottasa_id int
//     );
//   `;

//   const insertedPeople = await Promise.all(
//     people.map(async (person) => {

//       return client.sql`
//         INSERT INTO People (firstName, lastName, nicName, telephone, mobile, email, bithday, nic,status,gndivision_id, kottasa_id)
//         VALUES (${person.firstName}, ${person.lastName}, ${person.nicName}, ${person.telephone}, ${person.mobile}, 
//             ${person.email}, ${person.birthday}, ${person.nic},${person.status},${person.gndivision_id}, ${person.kottasa_id})
//         ;
//       `;
//     }),
//   );

//   return insertedPeople;
// }

// async function seedElection() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS Election (
//       election_id SERIAL PRIMARY KEY,
//       location VARCHAR(100) NOT NULL,
//       heldDate DATE NOT NULL,
//       note VARCHAR(2000),
//       kottasa_waraya_id int
//     );
//   `;

//   const insertedElection = await Promise.all(
//     elections.map(async (election) => {

//       return client.sql`
//         INSERT INTO Election (location, heldDate, note, kottasa_waraya_id)
//         VALUES (${election.location}, ${election.heldDate}, ${election.Note}, ${election.kottasa_waraya_id})
//         ;
//       `;
//     }),
//   );

//   return insertedElection;
// }

// async function seedLeaders() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS Leader (
//       leader_id SERIAL PRIMARY KEY,
//       designation VARCHAR(20) NOT NULL,
//       people_id int,
//       election_id int
//     );
//   `;

//   const insertedLeader = await Promise.all(
//     leaders.map(async (leader) => {

//       return client.sql`
//         INSERT INTO Leader (designation, people_id, election_id)
//         VALUES (${leader.designation}, ${leader.people_id}, ${leader.election_id})
//         ;
//       `;
//     }),
//   );

//   return insertedLeader;
// }

// async function seedMeeting() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS Meeting (
//       meeting_id SERIAL PRIMARY KEY,
//       place VARCHAR(50) NOT NULL,
//       name VARCHAR(50) NOT NULL,
//       address VARCHAR(50) NOT NULL,
//       heldDate DATE,
//       description VARCHAR(1000) NOT NULL,
//       createdPerson int,
//       status VARCHAR(50),
//       kottasa_waraya_id int
//     );
//   `;

//   const insertedMeetings = await Promise.all(
//     meetings.map(async (meeting) => {

//       return client.sql`
//         INSERT INTO Meeting (place,name, address, heldDate, description, createdPerson, status, kottasa_waraya_id)
//         VALUES (${meeting.place}, ${meeting.name}, ${meeting.address}, ${meeting.heldDate}, ${meeting.description}, 
//                                 ${meeting.createdPerson}, ${meeting.status}, ${meeting.kottasa_waraya_id})
//         ;
//       `;
//     }),
//   );

//   return insertedMeetings;
// }

// async function seedAttendance() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS Attendence (
//       attendance_id SERIAL PRIMARY KEY,
//       people_id int,
//       meeting_id int
//     );
//   `;

//   const insertedAttendance = await Promise.all(
//     attendence.map(async (att) => {

//       return client.sql`
//         INSERT INTO Attendence (people_id, meeting_id)
//         VALUES (${att.people_id}, ${att.meeting_id})
//         ;
//       `;
//     }),
//   );

//   return insertedAttendance;
// }

// async function seedProposalSessions() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS ProposedProjectSession (
//       proposed_project_session_id SERIAL PRIMARY KEY,
//       name varchar(100),
//       meeting_id int
//     );
//   `;

//   const insertedProposalSessions = await Promise.all(
//     proposalSessions.map(async (proposal) => {

//       return client.sql`
//         INSERT INTO ProposedProjectSession (name, meeting_id)
//         VALUES (${proposal.name}, ${proposal.meeting_id})
//         ;
//       `;
//     }),
//   );

//   return insertedProposalSessions;
// }

// async function seedProjects() {
//   //await client.sql`CREATE EXTENSION IF NOT EXISTS "int-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS Project (
//       project_id SERIAL PRIMARY KEY,
//       name varchar(100),
//       title varchar(200),
//       proposedDate DATE,
//       proposedBy int,
//       secondedBy int,
//       status varchar(10),
//       proposed_project_session_id int
//     );
//   `;

//   const insertedProjects = await Promise.all(
//     projects.map(async (project) => {

//       return client.sql`
//         INSERT INTO Project (name, title, proposedDate, proposedBy, secondedBy, status, proposed_project_session_id)
//         VALUES (${project.name}, ${project.title}, ${project.proposedDate}, ${project.proposedBy}, ${project.secondedBy}, ${project.status}, ${project.proposed_project_session_id})
//         ;
//       `;
//     }),
//   );

//   return insertedProjects;
// }


// export async function GET() {
//   // return Response.json({
//   //   message:
//   //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   // });
//   try {
//     console.log('111111111111111111111111111111111111')
//     await client.sql`BEGIN`;

//     // await seedDistrict();
//     // await seedDivisionSectory();
//     // await seedGNDivision()
//     // await seedKottasaSaba()
//     //await seedKottasaSabaWaraya()
//     //await People();
//     //await seedElection();
//     //await seedLeaders();
//     //await seedMeeting();
//     //await seedAttendance();
//     //await seedProposalSessions();
//     //await seedProjects();

//     await client.sql`COMMIT`;

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     console.log('errorxxxxx' + error)
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }

export async function GET() {

}