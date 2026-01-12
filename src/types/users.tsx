import { Date } from "firebase/ai";

export interface FirestoreUser{
  uid: string;
  email: string;
  role: "user" | "admin";
  displayName: string;
  createdAt: Date;
  photoURL: string;
  howDidYouHearAboutUs?: string;
}