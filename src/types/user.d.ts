enum Status {
  INACTIVE = 0,
  ACTIVE = 1,
}

enum UserRole {
  ADMIN = 0,
  MEMBER = 1,
}

type UserInputParams = {
  page?: number;
  page_size?: number;
  customQueryKey?: string[];
  staleTime?: number;
  [key: string]: unknown;
};

type UserInput = {
  username: string;
  email: string;
  password_hash: string;
  role: UserRole;
  status: Status;
};

interface IUser {
  id: number;
  uuid: string;
  username: string;
  email: string;
  password_hash: string;
  role: UserRole;
  status: Status;
  created_at: Date;
  updated_at: Date;
};

type UserListResponse = {
  total: number;
  count: number;
  next: string | null;
  prev: string | null;
  results: IUser[];
};
