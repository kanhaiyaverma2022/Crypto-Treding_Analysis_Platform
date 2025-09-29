import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const API_KEY = import.meta.env.VITE_RAPID_NEWS_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_NEWS_API_HOST;

const cryptoNewsApiHeaders = 
{
    'x-rapidapi-key':API_KEY,
    'x-rapidapi-host':API_HOST,
    'X-BingApis-SDK': 'true'
}

const baseUrl = `https://${import.meta.env.VITE_RAPID_NEWS_API_HOST}`;
const createRequest = (url)=>({url,headers:cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi(
    {
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>(
        {
            getCryptoNews:builder.query(
                {
                    query:({newsCategory,count})=>createRequest(`/news/coindesk?limit=${10}`)
                    // query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
                }
            )
        }
    )}
)

export const { useGetCryptoNewsQuery } = cryptoNewsApi;