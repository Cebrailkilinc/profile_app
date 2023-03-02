export interface RootObject {
  createdAt: Date;
  name: string;
  avatar: string;
  country: string;
  state: string;
  yearsOfExperience: number;
  certificateCount: number;
  numberOfInternships: number;
  summary: string;
  id: string;
}

export interface UsersState {
  users: any;
  currentUser: any;
  isLoading: boolean;
  errorMessage: string;
}

export interface TodoState {
  users: RootObject;
}
