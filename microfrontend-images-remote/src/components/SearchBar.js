import React, { useState } from 'react'

export default ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  const onChange = ({ target }) => {
    setTerm(target.value)
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input type="text" value={term} onChange={onChange} />
        </div>
        <button onClick={onFormSubmit}>Search</button>
      </form>
    </div>
  )
}

// class SearchBar extends React.Component {
//   state = { term: '' }

//   onFormSubmit = event => {
//     event.preventDefault()

//     this.props.onSubmit(this.state.term)
//   }

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default SearchBar
