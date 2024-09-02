import connectToDB from "@/app/db/connection";
import UserModel from "@/app/models/usermodel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectToDB();

        const { userData } = await request.json();
        console.log('userData::: ', userData);

        const {
            userName,
            email,
            number,
            password,
            isAdmin,
            isActive,
            address,
        } = userData;

        const user = new UserModel({
            userName,
            email,
            number,
            password,
            isAdmin,
            isActive,
            address,
        });

        await user.save();

        return new NextResponse(JSON.stringify({ message: 'User created successfully!' }), { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return new NextResponse(JSON.stringify({ message: 'Error creating user' }), { status: 500 });
    }
}



export async function GET() {
    try {
        await connectToDB();
        const users = await UserModel.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
    }
}