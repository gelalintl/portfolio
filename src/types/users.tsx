import { Timestamp } from "firebase/firestore";

export interface UserInterface {
  uid : string;
  email: string | null;
  emailVerified: boolean;
  displayName: string | null;
  photoURL: string | null;
  onboardingIsCompleted: boolean;
  lastSigninAt: Timestamp;
  createdAt: Timestamp;
  userDocument?: FirestoreUser;
}

export interface FirestoreUser{
  uid: string;
  email: string;
  role: "user" | "admin";
  createdAt: Timestamp;
  onboardingIsCompleted: boolean;
  wayYouKnow?: string;
  displayName?: string | null;
  photoURL: string | null;
  expertise?: string;
  biography?: string;
  //...
}