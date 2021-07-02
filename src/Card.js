import React from 'react'

const Card = (props) => {
    const {todoData} = props
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="my-4 bg-white shadow overflow-hidden sm:rounded-md">
            <CardContent todoData={todoData}/>
            </div>
        </div>
    )
}

const CardContent = (props) => {
    const rows = props.todoData.map((row, index) => {
        return (
            <li key={index}>
                <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                            <p className="capitalize text-sm text-xl font-bold text-indigo-500 truncate">{row.title}</p>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <p>
                                    <time datetime="2020-01-07">{row.date}</time>
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 overflow-ellipsis overflow-hidden">{row.content}</div>
                    </div>
                </a>
            </li>
        )
    })
    return  <ul className="divide-y divide-gray-200">{rows}</ul>
}

const ShowCard = (props) => {
    
}

export default Card