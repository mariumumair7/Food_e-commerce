import { NextRequest, NextResponse } from 'next/server';

interface Comment {
    _id: string;
    name: string;
    comment: string;
    createdAt: string;
   id: string; // Added id property for storing the Gmail id
}

const commentsDb: Record<string, Comment[]> = {
    'post1': [
        { _id: 'comment1', name: 'test1', comment: 'testComment1', createdAt: new Date().toString(), id: 'test1@gmail.com' },
        { _id: 'comment2', name: 'test2', comment: 'testComment2', createdAt: new Date().toString(), id: 'test2@gmail.com' },
    ],
    'post2': [
        { _id: 'comment3', name: 'test1', comment: 'testComment1', createdAt: new Date().toString(), id: 'test1@gmail.com' },
        { _id: 'comment4', name: 'test2', comment: 'testComment2', createdAt: new Date().toString(), id: 'test2@gmail.com' },
    ],
};

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const postId = url.searchParams.get('postId');

        if (!postId) {
            console.log("Missing Post ID in GET request");
           return NextResponse.json({ message: 'Post ID is required' }, { status: 400 });
        }

        if (!commentsDb[postId]) {
            console.log(`No comments found for postId: ${postId}`);
            return NextResponse.json([], { status: 200 });
        }
        console.log(`Fetching comments for postId: ${postId}`);
         return NextResponse.json(commentsDb[postId], { status: 200 });
     } catch (error) {
          console.error('Failed to fetch comments: ', error);
        return NextResponse.json({ message: 'Failed to fetch comments' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
     try {
          const body = await req.json();
            console.log('Request Body received:', body);
          const { postId, name, comment, id } = body; // De-structure new `id` property

          if (!postId || !name || !comment || !id) {
              console.log("Missing required values in POST request: ", body);
               return NextResponse.json({ message: 'Post ID, name, comment, and id are required' }, { status: 400 });
          }

         const newComment: Comment = {
               _id: String(Date.now()),
              name: name,
              comment: comment,
              createdAt: new Date().toString(),
            id: id
        };

        if (commentsDb[postId]) {
             commentsDb[postId].push(newComment);
            console.log(`Successfully added comment for postId: ${postId}`);
       } else {
            commentsDb[postId] = [newComment];
           console.log(`Creating new comment array for postId: ${postId}`);
        }

        return NextResponse.json(newComment, { status: 201 });
   } catch (error) {
         console.error('Failed to create comment: ', error);
        return NextResponse.json({ message: 'Failed to create comment' }, { status: 500 });
    }
}