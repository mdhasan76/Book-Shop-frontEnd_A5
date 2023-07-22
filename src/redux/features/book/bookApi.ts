import { api } from "../../api/apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
