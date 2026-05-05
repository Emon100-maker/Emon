export enum UserRole {
  STUDENT = 'student',
  ADMIN = 'admin',
}

export interface UserProfile {
  userId: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
  enrolledCourses: string[];
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'HSC' | 'Admission';
  subject: string;
  fee: number;
  duration: string;
  thumbnail: string;
  syllabus: string[];
}

export interface LearningMaterial {
  id: string;
  title: string;
  subject: string;
  chapter: string;
  topic: string;
  pdfUrl: string;
  type: 'Note' | 'Sheet' | 'Tricks';
}

export interface Question {
  id: string;
  text: string;
  imageUrl?: string;
  authorId: string;
  authorName: string;
  createdAt: any; // Firestore Timestamp
  resolved: boolean;
  upvotes: number;
}

export interface Answer {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  createdAt: any;
  isHelpful: boolean;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}
