import React from "react";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase";

interface LinkActionsProps {
  link: any;
  userId: string | null;
  index: number;
  shortenedLinks: any[];
  setShortenedLinks: React.Dispatch<React.SetStateAction<any[]>>;
}

export const handleEdit = async ({
  link,
  userId,
  index,
  shortenedLinks,
  setShortenedLinks,
}: LinkActionsProps) => {
  const linkDocRef = doc(db, "users", userId ?? 'defaultUserId', "links", link.id!);
  await updateDoc(linkDocRef, { /*...fields to update*/ });
  setShortenedLinks((prevLinks) =>
    prevLinks.map((link, i) => (i === index ? { ...link, /*...updated fields*/ } : link))
  );
};

export const handleDelete = async ({
  link,
  userId,
  index,
  shortenedLinks,
  setShortenedLinks,
}: LinkActionsProps) => {
  const linkDocRef = doc(db, "users", userId ?? 'defaultUserId', "links", link.id!);
  await deleteDoc(linkDocRef);
  setShortenedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
};
