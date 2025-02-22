export class FetchError extends Error {
  constructor(
    public message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'FetchError';
  }
}

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  // First, check if the response is ok
  if (!response.ok) {
    let errorMessage = 'An error occurred while fetching the data.';
    let errorData;

    // Try to parse error JSON if exists
    try {
      errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // If JSON parsing fails, try to get text
      errorMessage = await response.text() || errorMessage;
    }

    throw new FetchError(errorMessage, response.status, errorData);
  }

  // Check if response is empty
  const text = await response.text();
  if (!text) {
    return {} as T;
  }

  // Try to parse JSON
  try {
    return JSON.parse(text) as T;
  } catch (error) {
    throw new FetchError(
      'Failed to parse JSON response',
      response.status,
      text
    );
  }
};

// Usage example:
/*
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

interface Presenter {
  id: string;
  name: string;
}

function MyComponent() {
  const { data, error, isLoading } = useSWR<Presenter[], FetchError>(
    '/api/presenters',
    fetcher
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{data?.map(presenter => presenter.name)}</div>;
}
*/ 