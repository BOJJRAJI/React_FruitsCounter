import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangosCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangosCount: prevState.mangosCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangosCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="mango">{mangosCount} </span>mangoes
            <span className="banana"> {bananaCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
