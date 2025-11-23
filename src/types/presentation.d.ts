enum Status {
  INACTIVE = 0,
  ACTIVE = 1,
}

enum PresentationStyle {
  PROFESSIONAL = 0,
  CREATIVE = 1,
  MINIMALIST = 2,
}

type PresentationInput = {
  generation_id: number;
  title: string;
  style: PresentationStyle;
  language: string;
};

type PresentationInputParams = {
  page?: number;
  page_size?: number;
  customQueryKey?: string[];
  staleTime?: number;
  [key: string]: unknown;
};

interface IPresentation {
  id: number;
  uuid: string;
  generation_id: number;
  user_id: number;
  title: string;
  content: any | JSON; 
  style: PresentationStyle;
  language: string;
  status: Status;
  created_at: Date;
  updated_at: Date;
};

type PresentationListResponse = {
  total: number;
  count: number;
  next: string | null;
  prev: string | null;
  results: IPresentation[];
};