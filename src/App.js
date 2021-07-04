import React, {Component} from 'react'
import Button from './Button'
import Card from './Card'


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
                    <Button handleSubmit={this.handleSubmit}/>
                    </div>
                </div>
                </header>
                <main>
                    <Card todoData={todos}  />
                </main>
            </div>
            <div id="portal"></div>
        </div>
        
    )
  }


  handleSubmit = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }
}

export default App