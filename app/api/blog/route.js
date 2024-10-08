import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/config/db";
import { promises as fs, stat } from "fs";
import { Post } from "@/app/lib/models/post.model";

// first connecting to our database:
async function LoadDB() {
  console.log("db is connecting...");
  await connectDB();
}
LoadDB();

// add inject the data to db:
export async function POST(request) {
  try {
    const formData = await request.formData();

    const timesStamps = Date.now();
    const image = formData.get("image");

    if (!image)
      return NextResponse.json(
        { message: "Image is not uploaded" },
        { status: 400 }
      );
    const imageBytesBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(imageBytesBuffer);
    const Path = `./public/${timesStamps}_${image.name}`;
    await fs.writeFile(Path, buffer);
    const imageURL = `/${timesStamps}_${image.name}`;
    const PostData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),  // Debug this value
      author: formData.get("author"),
      image: imageURL,
    };
    
    console.log("Category Value:", PostData.category);  // Log the category value
    
    const post = new Post(PostData);
    console.log("Post Object before save:", post);  // Log post object to verify the data
    
    // Validate the post to check for schema issues
    await post.validate().catch(err => {
      console.error('Validation Error:', err);
    });
    
    await post.save();
        return NextResponse.json({
      message: `Post Data has been saved to database`,
      status: 200,
      post
    });
  } catch (error) {
    console.log("There is Error while Uploading the post details ", error);
    return NextResponse.json({ status: 500, message: "File upload failed" });
  }
}

// geting all data form db;
export async function GET(request) {
  try {
    const posts = await Post.find();
    if (!posts) {
      return NextResponse.json(
        { message: "No posts are avialable for now " },
        { status: 400 }
      );
    }
    return NextResponse.json({
      status: 200,
      message: "Successfully fetched all data ",
      posts,
    });
  } catch (error) {
    console.log("There is Error while fetching the post details ", error);
    return NextResponse.json(
      { message: "Failed to getting all posts" },
      { status: 500 }
    );
  }
}

