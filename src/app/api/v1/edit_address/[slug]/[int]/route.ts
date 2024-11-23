import { NextResponse } from "next/server";
// Handle post or create operation

// SLUG IS THE ACTION YOU WANT TO TAKE
export async function POST(
  request: Request,
  { params }: { params: { slug: string; int: string } }
) {
  try {
    const { slug: Action, int: AddressId } = params;

    if(!AddressId){ // verify that the id is in the database
        return NextResponse.json({ message: "Address not found" }, { status: 404 });
    }

    if(Action === 'update_country'){
        const body = await request.json(); // it should have the state and country
        // use zod or joi to verify the data
        // wri
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}

// Handle update operation
export async function PATCH() {
  try {
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}

// Handle Delete operation

export async function DELETE() {
  try {
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
}
