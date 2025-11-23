enum Status {
  INACTIVE = 0,
  ACTIVE = 1,
}

enum GenerationScope {
  MULTI_PAGE = 0,
  SINGLE_PAGE = 1,
}

type GenerationInput = {
  document_id: number;
  scope: GenerationScope;
  prompt: string;
};

type GenerationInputParams = {
  page?: number;
  page_size?: number;
  customQueryKey?: string[];
  staleTime?: number;
  [key: string]: unknown;
};


interface IGeneration {
  id: number;
  uuid: string;
  document_id: number;
  scope: GenerationScope;
  prompt: string;
  outline: any | JSON; 
  ai_metadata: any | JSON; 
  status: Status;
  created_at: Date;
  updated_at: Date;
};

type GenerationListResponse = {
  total: number;
  count: number;
  next: string | null;
  prev: string | null;
  results: IGeneration[];
};