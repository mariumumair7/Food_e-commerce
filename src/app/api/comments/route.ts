import { NextResponse } from 'next/server';

interface Comment {
  id: number;
  text: string;
  slug: string;
}

const comments: Comment[] = []; // This is just a mock data array for demonstration purposes

// GET request to fetch comments for a specific blog post
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug'); // Get the slug from the query parameters

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
  }

  const filteredComments = comments.filter(comment => comment.slug === slug);
  return NextResponse.json(filteredComments);
}

// POST request to submit a new comment
export async function POST(request: Request) {
  try {
    const { text, slug }: { text: string; slug: string } = await request.json();

    if (!text || !slug) {
      return NextResponse.json({ message: 'Text and slug are required' }, { status: 400 });
    }

    // Create a new comment object
    const newComment: Comment = {
      id: comments.length + 1,
      text,
      slug,
    };

    // Save the new comment to the mock database
    comments.push(newComment);

    console.log("New comment added:", newComment); // Log the new comment for debugging

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Error processing comment submission:', error);
    return NextResponse.json({ message: 'Error submitting comment' }, { status: 500 });
  }
}
