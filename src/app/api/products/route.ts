import connectToDB from "@/app/db/connection"
import ProductModel from "@/app/models/productModel"
import { NextResponse } from "next/server"

export async function POST(request: Request,) {

    const { productData } = await request.json()

    const {
        name,
        price,
        category,
        desc,
        stock,
        color
    } = productData

    try {
        connectToDB()
        const newProduct = await new ProductModel({
            name,
            price,
            category,
            desc,
            stock,
            color
        })

        newProduct.save()
        return NextResponse.json(newProduct, { status: 200 })
    } catch (error) {
        console.log('error :>> ', error);
    }
}

export async function GET(request: Request) {
    try {
        connectToDB()
        const data = await ProductModel.find({})
        if (!data) {
            return NextResponse.json({ message: "No products found" }, { status: 404 })
        }
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        console.log('error :>> ', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}