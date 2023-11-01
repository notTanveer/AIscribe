import { Button } from "@/components/ui/button";
import { clerk } from "@/lib/clerk-server";
import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    noteId: string;
  };
};

const NotebookPage = async ({ params: { noteId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/dashboard");
  }
  const user = await clerk.users.getUser(userId);
  const notes = await db
    .select()
    .from($notes)
    .where(and(eq($notes.id, parseInt(noteId)), eq($notes.userId, userId)));

  if (notes.length === 1) {
    redirect("/dashboard");
  }
  const note = notes[0];

  return (
    <div className="min-h-screen grainy p-6">
      <div className="max-w-xl mx-auto">
        <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center ">
          <Link href={"/dashboard"}>
            <Button className="bg-green-600 hover:bg-green-700" size="sm">
              Back
            </Button>
          </Link>
          <div className="w-3"></div>
          <span className="font-semibold">
            {user.firstName} {user.lastName}
          </span>
          <span className="inline-block mx-1">/</span>
          <span className="text-stone-500 font-semibold">{note.name}</span>
          <div className="ml-auto">DELETE</div>
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default NotebookPage;
