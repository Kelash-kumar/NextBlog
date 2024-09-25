import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/config/db";
import { Post } from "@/app/lib/models/post.model";

// First, connect to the database
// async function LoadDB() {
//   console.log("db is connecting...");
//   await connectDB();
// }
// LoadDB();

// Get post by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({
      status: 200,
      message: "Post fetched successfully",
      post,
    });
  } catch (error) {
    console.log("Error fetching post by ID:", error);
    return NextResponse.json(
      { message: "Failed to fetch post", error },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found",status:404 });
    }
    return NextResponse.json({
      status: 200,
      message: "Your request has succeed.",

    });
  } catch (error) {
    return NextResponse.json(
      { message: "server error ", status:500 },
     
    );
  }
}
