import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoDB";
import Customer from "@/lib/models/Customer";

export const GET = async (req: NextRequest) => {
    try {
        await connectToDB();

        const customers = await Customer.find().sort({ createdAt: "desc" });

        return NextResponse.json(customers, { status: 200 });
    } catch (error) {
        console.log("[products_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};

export const dynamic = "force-dynamic";
