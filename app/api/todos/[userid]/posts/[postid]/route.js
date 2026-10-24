import { NextResponse } from "next/server";

export function GET({request, params}) {

    return NextResponse.json({ message: "User get successfully Amit", params:params })

}