import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // ... your logic, e.g. create user
  } catch (error: unknown) {
    if (error instanceof PrismaClientKnownRequestError) {
      // handle unique constraint or other Prisma runtime errors
      if (error.code === 'P2002') {
        return NextResponse.json({ message: 'User already exists' }, { status: 409 });
      }
    }
    // rethrow or return a 500
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
