// src/hooks/useContentFetcher.ts

import useSWR from 'swr';
import axiosInstance from '../utils/axios';

interface ContentItem {
  id: number;
  page: string;
  section: string;
  content: string;
  content_en: string;
  content_ar: string;
  image: string | null;
  created_at: string;
  updated_at: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

interface UseContentFetcherResult {
  content: ContentItem | null;
  isLoading: boolean;
  isError: any;
}

const fetcher = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get(url);
  return response.data;
};

const useContentFetcher = (
  page: string,
  section: string
): UseContentFetcherResult => {
  const shouldFetch = !!page && !!section;
  const { data, error, isLoading } = useSWR<PaginatedResponse<ContentItem>>(
    shouldFetch ? `/api/content/?page=${page}&section=${section}` : null,
    fetcher
  );

  return {
    content: data?.results?.[0] || null,
    isLoading,
    isError: error
  };
};

export default useContentFetcher;
