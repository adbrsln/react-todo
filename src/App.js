import React, {Component} from 'react'
import Card from './Card'
import Create from './Create'
class App extends Component {
  state = {
    todos: [{
        "title" : 'test',
        "content" : 'lorem ipsum dorlor sit ammet',
        'date' : '10 February 2021' 
    },
    {
        "title" : 'test',
        "content" : 'lorem ipsum dorlor sit ammet',
        'date' : '10 February 2021' 
    }],
  }
  render() {
    const { todos } = this.state
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="py-10">
                <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">My Todo</h1>
                    <button type="button" className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New
                    </button>
                    </div>
                </div>
                </header>
                <main>
                    <Card todoData={todos}/>
                    <Create/>
                </main>
            </div>
        </div>
    )
  }
}

export default App