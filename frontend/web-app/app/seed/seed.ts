import { PrismaClient } from '@prisma/client'
//import { districts, divisionalSecretariats, elections, gnDivision, kottasaSaba, kottasaSabaWaraya, people } from '../lib/placeholder-data';

const prisma = new PrismaClient()

async function main() {
    const western = await prisma.district.upsert({
        where: { name: 'western' },
        update: {},
        create: {
            name: 'western',
            title: 'Western'
        },
    })

    await prisma.district.upsert({
        where: { name: 'north' },
        update: {},
        create: {
            name: 'north',
            title: 'North'
        },
    })

    const mahara = await prisma.divisionalSecretariat.upsert({
        where: { name: 'mahara' },
        update: {},
        create: {
            name: 'mahara',
            title: 'Mahara',
            district_id: western.district_id
        },
    })

    await prisma.divisionalSecretariat.upsert({
        where: { name: 'biyagama' },
        update: {},
        create: {
            name: 'biyagama',
            title: 'Biyagama',
            district_id: western.district_id
        },
    })

    const gn1 = await prisma.gNDivision.upsert({
        where: { name: '241a' },
        update: {},
        create: {
            name: '241a',
            title: '241A',
            divisionalsecretariat_id: mahara.divisionalsecretariat_id
        },
    })

    await prisma.gNDivision.upsert({
        where: { name: '241a' },
        update: {},
        create: {
            name: '241b',
            title: '241B',
            divisionalsecretariat_id: mahara.divisionalsecretariat_id
        },
    })

    const ks1 = await prisma.kottasaSaba.upsert({
        where: { name: '241a-kotasa' },
        update: {},
        create: {
            name: '241a-kotasa',
            title: '241a-kotasa',
            gndivision_id: gn1.gndivision_id
        },
    })

    await prisma.kottasaSaba.upsert({
        where: { name: '241b-kotasa' },
        update: {},
        create: {
            name: '241b-kotasa',
            title: '241b-kotasa',
            gndivision_id: gn1.gndivision_id
        },
    })

    const waraya1 = await prisma.seedKottasaSabaWaraya.create({
        data: {
            name: '1-Waraya',
            startDate: new Date('2023-01-01'),
            endDate: new Date('2023-06-30'),
            kottasa_id: ks1.kottasa_id
        },
    })

    const waraya2 = await prisma.seedKottasaSabaWaraya.create({
        data: {
            name: '2-Waraya',
            startDate: new Date('2023-07-01'),
            endDate: new Date('2023-12-31'),
            kottasa_id: ks1.kottasa_id
        },
    })

    const lakmal = await prisma.people.upsert({
        where: { nic: '123456789V' },
        update: {},
        create: {
            firstName: 'Lakmal',
            lastName: 'Perera',
            nicName: 'Lakmal',
            telephone: '123456789',
            mobile: '123456789',
            email: 'test1@gmail.com',
            birthday: new Date('1983-06-30'),
            nic: '123456789V',
            status: 'active',
            gndivision_id: gn1.gndivision_id,
            kottasa_id: ks1.kottasa_id
        },
    })

    const waruna = await prisma.people.upsert({
        where: { nic: '123123123V' },
        update: {},
        create: {
            firstName: 'Waruna',
            lastName: 'Wijesiri',
            nicName: 'Waruna',
            telephone: '123456789',
            mobile: '123456789',
            email: 'test1@gmail.com',
            birthday: new Date('1983-06-30'),
            nic: '123123123V',
            status: 'active',
            gndivision_id: gn1.gndivision_id,
            kottasa_id: ks1.kottasa_id
        },
    })

    const elec1 = await prisma.election.create({
        data: {
            location: 'location 1',
            heldDate: new Date('2023-01-01'),
            note: 'election note 1',
            kottasa_waraya_id: waraya1.kottasa_waraya_id
        },
    })

    await prisma.election.create({
        data: {
            location: 'location 2',
            heldDate: new Date('2023-06-01'),
            note: 'election note 2',
            kottasa_waraya_id: waraya2.kottasa_waraya_id
        },
    })

    await prisma.leaders.create({
        data: {
            people_id: lakmal.person_id,
            designation: 'designaion 1',
            election_id: elec1.election_id
        },
    })

    await prisma.leaders.create({
        data: {
            people_id: waruna.person_id,
            designation: 'designaion 2',
            election_id: elec1.election_id
        },
    })

    const meeting1 = await prisma.meeting.create({
        data: {
            place: 'place 1',
            name: 'meeting 1',
            address: 'address 1',
            heldDate: new Date('2023-06-01'),
            description: 'description 1',
            createdPerson: lakmal.person_id,
            status: 'active',
            kottasa_waraya_id: waraya1.kottasa_waraya_id
        },
    })

    await prisma.meeting.create({
        data: {
            place: 'place 2',
            name: 'meeting 2',
            address: 'address 2',
            heldDate: new Date('2023-08-01'),
            description: 'description 2',
            createdPerson: waruna.person_id,
            status: 'active',
            kottasa_waraya_id: waraya2.kottasa_waraya_id
        },
    })

    await prisma.attendance.create({
        data: {
            people_id: waruna.person_id,
            meeting_id: meeting1.meeting_id
        },
    })

    const session1 = await prisma.proposalSession.create({
        data: {
            name: 'session 1',
            meeting_id: meeting1.meeting_id
        },
    })

    await prisma.proposalSession.create({
        data: {
            name: 'session 2',
            meeting_id: meeting1.meeting_id
        },
    })

    await prisma.project.create({
        data: {
            name: 'project 1',
            title: 'project 1 title',
            proposedDate: new Date('2023-08-01'),
            proposedBy: lakmal.person_id,
            secondedBy: waruna.person_id,
            status: 'init',
            proposed_session_id: session1.proposed_session_id
        },
    })

    await prisma.project.create({
        data: {
            name: 'project 2',
            title: 'project 2 title',
            proposedDate: new Date('2023-08-01'),
            proposedBy: waruna.person_id,
            secondedBy: lakmal.person_id,
            status: 'init',
            proposed_session_id: session1.proposed_session_id
        },
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })