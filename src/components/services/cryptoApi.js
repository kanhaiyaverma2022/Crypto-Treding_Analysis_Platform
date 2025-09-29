import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_KEY = import.meta.env.RAPID_API_KEY || 'a741257042msh8a2b3819861446bp1704dajsn77cd8d0febdb'
const API_HOST = import.meta.env.RAPID_API_HOST

const cryptoApiHeaders = {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
}

const baseUrl = import.meta.env.VITE_RAPID_API_BASEURL
const createRequest = (url,params)=>({url,headers:cryptoApiHeaders,params})

export const cryptoApi = createApi(
    {
        reducerPath:'cryptoApi',
        baseQuery:fetchBaseQuery({baseUrl}),
        endpoints:(builder)=>({
            getCrypto:builder.query(
                {
                    query:(count)=>createRequest(`/coins?limit=${count}`)
                }
            ),
            getCryptoDetails:builder.query(
                {
                    query: (id)=>createRequest(`/coin/${id}`)
                }
            ),
            getCryptoHistory:builder.query(
                { query:({coinId, timePeriod})=>createRequest(`/coin/${coinId}/history`,{referenceCurrencyUuid:coinId,timePeriod})}
            )
        })

    }
)

export const {useGetCryptoQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;