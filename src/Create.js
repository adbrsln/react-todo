import React, {Component} from 'react'
import moment from 'moment'
class Form extends Component {
  setShowModal = ''
  constructor(props) {
      super(props)
      this.setShowModal = props.setShowModal
  }
  initialState = {
    title: '',
    content: '',
    date: ''
  }

  state = this.initialState
  
  render() {
    const { title, content } = this.state;
  
    return (
        <form id="form" >
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                    <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Add New Todo</h3>
                    <div className="mt-2">
                        <div>
                        <label for="title" className="mb-2 block text-sm font-medium text-gray-700">Title</label>
                        <div className="mt-1">
                            <input type="text" name="title" onChange={this.handleChange} id="title" value={title} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="write something here" />
                        </div>
                        </div>
                        <div className="mt-4">
                        <label for="content" className="mb-2 block text-sm font-medium text-gray-700">Content</label>
                        <div>
                            <textarea id="content" name="content" onChange={this.handleChange}  value={content} rows="5" className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md">{content}</textarea>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button type="button" onClick={this.submitForm}  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">Add Todo</button>
                    <button type="button" onClick={() => this.setShowModal(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">Cancel</button>
                </div>
                </div>
            </div>
        </div>
      </form>
    );
  }

  handleChange = (event) => {
    const {name, value} = event.target
    let currentDate = moment().format('DD MMMM YYYY LT')
    this.setState({
      [name]: value,
      date:currentDate
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    this.setShowModal(false)
  }
}

export default Form;