import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <main className='ml-72 w-full'>
                <div>
                    <p>hello word</p>
                    <div className='bg-red-500 w-56 h-44 m-10'></div>
                    <div className='bg-red-500 w-56 h-44 m-10'></div>
                    <div className='bg-red-500 w-56 h-44 m-10'></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
                    <div className='bg-red-500 w-56 h-44 m-10'></div>
                    <div className='bg-red-500 w-56 h-44 m-10'></div>
                    <div className='bg-red-500 w-56 h-44 m-10'></div>
                </div>
                <div className='flex flex-col'>
                    <div className='bg-red-500 w-56 h-44 m-10'>
                        <div className="bg-lime-300 w-20 h-20 m-3"></div>

                    </div>
                    <div className='bg-red-500 w-56 h-44 m-10 flex justify-center'>
                        <div className="bg-lime-300 w-20 h-20 m-3 "></div>

                    </div>
                    <div className='bg-red-500 w-56   h-44 m-10 flex justify-end'>
                        <div className="bg-lime-300 w-full h-20 m-3"></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

                    </div>
                </div>
            </main>
           {/*  <div className="container border-red-500 h-full"></div>
            <div className="columns-2">
                <p>Well, let me tell you something, ...</p>
                <p className="break-after-column">Sure, go ahead, laugh...</p>
                <p>Maybe we can live without...</p>
                <p>Look. If you think this is...</p>
            </div> */}
        </>
    )
}