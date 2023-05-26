import { config } from 'dotenv';
import { AppOptions, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

config();

const getOrThrow = (envName: string): string => {
  const value = process.env[envName];

  if (!value) {
    throw new Error(`Environment variable ${envName} is missing`);
  }

  return value;
};

const firebaseConfig: AppOptions = {
  credential: cert({
    projectId: getOrThrow('FIREBASE_PROJECT_ID'),
    privateKey: getOrThrow('FIREBASE_PRIVATE_KEY'),
    clientEmail: getOrThrow('FIREBASE_CLIENT_EMAIL'),
  }),
  projectId: getOrThrow('FIREBASE_PROJECT_ID'),
  databaseURL: getOrThrow('FIREBASE_DATABASE_URL'),
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
