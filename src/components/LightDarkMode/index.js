// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {stat: true}

  change = () => {
    this.setState(prevState => ({stat: !prevState.stat}))
  }

  render() {
    const {stat} = this.state
    const textbuton = stat ? 'Light Mode' : 'Dark Mode'
    const clases = stat ? 'sec1' : 'sec2'

    return (
      <div className="main">
        <div className={clases}>
          <h1>Click to Change Mode</h1>
          <button type="button" onClick={this.change} className="bb">
            {textbuton}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
