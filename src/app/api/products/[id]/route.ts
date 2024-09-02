import connectToDB from "@/app/db/connection";
import ProductModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        connectToDB()
        const user = await ProductModel.findById(id);
        if (!user) {
            return new Response('Product not found', { status: 404 });
        }
        return NextResponse.json(user, { status: 200 })

    } catch (error) {
        console.log('error :>> ', error);
        return NextResponse.json('Error', { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const productData = await request.json();

    try {
        connectToDB()
        const data = await ProductModel.findByIdAndUpdate(id, productData, { new: true })
        if (!data) {
            return NextResponse.json('Product not found', { status: 404 });
        }
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        console.log('error :>> ', error);
        return NextResponse.json('Error', { status: 500 });
    }

}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        connectToDB()
        const data = await ProductModel.findByIdAndDelete(id)
        if (!data) {
            return NextResponse.json('Product not found', { status: 404 });
        }
        return NextResponse.json('Product deleted', { status: 200 })
    } catch (error) {
        console.log('error :>> ', error);
    }
}
