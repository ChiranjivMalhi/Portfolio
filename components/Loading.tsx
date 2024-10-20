"use client"
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='w-screen flex justify-center items-center h-screen'>
            <InfinitySpin
                width="200"
                color="#4C009C"
            />
        </div>
    )
}

export default Loading