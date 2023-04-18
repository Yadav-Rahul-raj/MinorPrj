import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    reducerPath:"adminApi",
    tagTypes:["User","Announcements","ManageFacultys","AssignMentors","AssignPanels"],
    endpoints:(build)=>({
        getUser: build.query({
            query:(id) => `general/user/${id}`,
            providesTags:["User"],  
        }),
        getAnnouncement: build.query({
            query: ()=> "client/announcements",
            providesTags: ['Announcements'],
        }),
        getManageFacultys: build.query({
            query: ({page, pageSize, sort, search, deleteMentor}) =>({
                url:"client/manageFaculty",
                method:"GET",
                params :{ page, pageSize, sort, search, deleteMentor},
            }),
            providesTags:['ManageFacultys'],
        }),
        getAssignMentors: build.query({
            query: ({page, pageSize, sort, search, deleteMentor}) =>({
                url:"client/assignMentor",
                method:"GET",
                params :{ page, pageSize, sort, search, deleteMentor},
            }),
            providesTags:['AssignMentors'],
        }),
        getAssignPanels: build.query({
            query: ({page, pageSize, sort, search, deleteMentor}) =>({
                url:"client/assignPanel",
                method:"GET",
                params :{ page, pageSize, sort, search, deleteMentor},
            }),
            providesTags:['AssignPanels'],
        }),
    }),
});



export const{useGetUserQuery, useGetAnnouncementQuery, useGetManageFacultysQuery, useGetAssignMentorsQuery, useGetAssignPanelsQuery} = api;