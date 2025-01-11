import { db } from "./server/db"; // Ensure this path correctly points to your Prisma client setup

async function main() {
    await db.user.create({
        data: {
            emailAddress: 'aryan@example.com',
            firstName: 'Aryan',
            lastName: 'Example',
        },
    });

    console.log("User created successfully!");
}

main()
    .catch((e) => {
        console.error("Error:", e);
    })
    .finally(async () => {
        await db.$disconnect(); // Disconnect the Prisma Client after the operation
    });
