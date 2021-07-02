import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    title: '',
    content: '',
  }

  state = this.initialState
  
  render() {
    const { title, content } = this.state;
  
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange} />
        <label htmlFor="title">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={this.handleChange} />

          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
}

export default Form;