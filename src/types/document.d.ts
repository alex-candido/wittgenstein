enum Status {
  INACTIVE = 0,
  ACTIVE = 1,
}

enum Visibility {
  PRIVATE = 0,
  PUBLIC = 1,
}

type DocumentInput = {
  title: string;
  visibility: Visibility;
};

type DocumentInputParams = {
  page?: number;
  page_size?: number;
  customQueryKey?: string[];
  staleTime?: number;
  [key: string]: unknown;
};


interface IDocument {
  id: number;
  uuid: string;
  user_id: number;
  title: string;
  visibility: Visibility;
  latest_generation_id: number | null;
  latest_presentation_id: number | null;
  status: Status;
  created_at: Date;
  updated_at: Date;
};

type DocumentListResponse = {
  total: number;
  count: number;
  next: string | null;
  prev: string | null;
  results: IDocument[];
};