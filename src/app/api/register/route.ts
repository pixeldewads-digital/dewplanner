export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing email or password' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        ...(name ? { name } : {}),
      },
    });

    return NextResponse.json({ id: user.id }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Unique constraint failed (duplicate email)
      if (error.code === 'P2002') {
        return NextResponse.json({ message: 'User already exists' }, { status: 409 });
      }
    }
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
