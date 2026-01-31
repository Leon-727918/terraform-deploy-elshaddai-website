import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export const getUsers = async () => {
    try {
        const users = await sql`SELECT * FROM users`;
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
