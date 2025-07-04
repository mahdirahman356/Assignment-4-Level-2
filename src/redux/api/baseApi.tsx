import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://assignment-3-indol-pi.vercel.app/" }),
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
        getBorrowBooks: builder.query({
            query: () => "/api/borrow",
            providesTags: ["Books"],
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
    useGetBorrowBooksQuery,
    useBorrowBookMutation
} = baseApi