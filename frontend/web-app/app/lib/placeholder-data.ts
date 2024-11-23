// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const districts = [
  {
    name: 'western',
    title: 'Western',
  },
  {
    name: 'north',
    title: 'North',
  },
];

const divisionalSecretariats = [
  {
    name: 'mahara',
    title: 'Mahara',
    district_id: 1
  },
  {
    name: 'biyagama',
    title: 'Biyagama',
    district_id: 1
  },
];

const gnDivision = [
  {
    name: '241a',
    title: '241A',
    divisionalsecretariat_id: 1
  },
  {
    name: '241b',
    title: '241B',
    divisionalsecretariat_id: 1
  },
];

const kottasaSaba = [
  {
    name: '241a-kotasa',
    title: '241A-Kotasa',
    gndivision_id: 1
  },
  {
    name: '241b-kotasa',
    title: '241B-Kotasa',
    gndivision_id: 2
  },
];

const kottasaSabaWaraya = [
  {
    name: '1-Waraya',
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    kottasa_id: 1
  },
  {
    name: '2-Waraya',
    startDate: '2023-07-01',
    endDate: '2023-12-31',
    kottasa_id: 1
  },
];

const people = [
  {
    firstName: 'Lakmal',
    lastName: 'Perera',
    nicName: 'Lakmal',
    telephone: '123456789',
    mobile: '123456789',
    email: 'test1@gmail.com',
    birthday: '1983-06-30',
    nic: '123456789V',
    status: 'active', //active, inactive
    gndivision_id: 1,
    kottasa_id: 1
  },
  {
    firstName: 'Waruna',
    lastName: 'Wijesiri',
    nicName: 'Waruna',
    telephone: '123456789',
    mobile: '123456789',
    email: 'test1@gmail.com',
    birthday: '1983-06-30',
    nic: '123456789V',
    status: 'active', //active, inactive
    gndivision_id: 1,
    kottasa_id: 1
  },
];

const elections = [
  {
    location: 'location 1',
    heldDate: '2023-01-01',
    Note: 'election note 1',
    kottasa_waraya_id: 1
  },
  {
    location: 'location 1',
    heldDate: '2023-06-01',
    Note: 'election note 2',
    kottasa_waraya_id: 2
  },
];

const leaders = [
  {
    people_id: 1,
    designation: 'designaion 1',
    election_id: 1
  },
  {
    people_id: 2,
    designation: 'designaion 2',
    election_id: 1
  },
];

const meetings = [
  {
    place: 'place 1',
    name: 'meeting 1',
    address: 'address 1',
    heldDate: '2023-06-01',
    description: 'description 1',
    createdPerson: 1,
    status: 'active',
    kottasa_waraya_id: 1
  },
  {
    place: 'place 2',
    name: 'meeting 2',
    address: 'address 2',
    heldDate: '2023-08-01',
    description: 'description 2',
    createdPerson: 1,
    status: 'active',
    kottasa_waraya_id: 1
  },
];

const attendence = [
  {
    people_id: 1,
    meeting_id: 1
  },
  {
    people_id: 2,
    meeting_id: 1
  }
];


const proposalSessions = [
  {
    name: 'session 1',
    meeting_id: 1
  },
  {
    name: 'session 2',
    meeting_id: 2
  }
];

const projects = [
  {
    name: 'project 1',
    title: 'project 1 title',
    proposedDate: '2023-08-01',
    proposedBy: 1,
    secondedBy: 2,
    status: 'init',
    proposed_project_session_id: 1
  },
  {
    name: 'project 2',
    title: 'project 2 title',
    proposedDate: '2023-08-01',
    proposedBy: 2,
    secondedBy: 1,
    status: 'init',
    proposed_project_session_id: 1
  }
];

export { districts, divisionalSecretariats, gnDivision, kottasaSaba, kottasaSabaWaraya, people, elections, leaders, meetings, attendence, proposalSessions, projects };
