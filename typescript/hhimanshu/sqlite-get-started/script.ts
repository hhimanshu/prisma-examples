import { PrismaClient } from './prisma/prisma/client'

const prisma = new PrismaClient()

async function main() {
  const insertUser = async () => {
    const user = await prisma.user.create({
      data: {
        email: 'lisa@email.com',
        name: 'Lisa B',
      },
    })
    console.log(user)
  }

  const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    console.log(users)
  }

  //await insertUser()
  await getAllUsers()
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
