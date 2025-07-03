import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/api/books",
            providesTags: ["Books"],
        }),
        getBookById: builder.query({
            query: (id) => `/api/books/${id}`,
            providesTags: ["Books"]
        }),
        createBook: builder.mutation({
            query: (BookData) => ({
                url: "/api/books",
                method: "POST",
                body: BookData
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({ id, ...updatedData }) => ({
                url: `/api/books/${id}`,
                method: "PUT",
                body: updatedData,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/api/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/api/borrow",
                method: "POST",
                body: borrowData,
            }),
            invalidatesTags: ["Books"],
        }),
    })
})

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
    useBorrowBookMutation
} = baseApi