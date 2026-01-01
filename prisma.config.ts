
import { defineConfig } from 'prisma/config';
import 'dotenv/config';

export default defineConfig({
  datasource: {
    // The DATABASE_URL is now correctly formatted for SQLite.
    url: process.env.DATABASE_URL || 'file:./dev.db',
  },
});
