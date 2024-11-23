import { NextResponse } from 'next/server';
import path from 'path'
import fs from 'fs'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/data.json') // Construct the file path so it will work on any kind of server, Linux or  windows
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const jsonData = JSON.parse(fileContent)

    return NextResponse.json({data: jsonData.menuItems}, {status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "An error occured"}, {status: 500})
  }
}