import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import UseAuth from './UseAuth'


const UseGetUser = () => {

    const { token } = UseAuth()
    const fetcher = async (url) => axios.get(url, {headers : {"Authorization":`Bearer ${token}`}})
    const { data, error } = useSWR(`${import.meta.env.VITE_BASE_URL}users/profile`, fetcher)

    if (!data) return { user: null, isLoading: true }
    if (error) return { user: null, isError: true }

    return { user: data.data.data, isLoading: false }
}

export default UseGetUser