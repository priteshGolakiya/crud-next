import connectToDB from "@/app/db/connection";
import UserModel from "@/app/models/usermodel";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        connectToDB();
        const userData = await UserModel.findById(id);
        if (!userData) {
            return NextResponse.json("User not found", { status: 404 });
        }
        return NextResponse.json(userData, { status: 200 });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        connectToDB();
        const userData = await request.json();
        const updatedUser = await UserModel.findByIdAndUpdate(id, userData, { new: true });
        if (!updatedUser) {
            return NextResponse.json("User not found", { status: 404 });
        }
        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error("Error updating user data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        await connectToDB();
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}