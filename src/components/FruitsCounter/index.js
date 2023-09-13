import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncreaseBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onIncreaseMangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                onClick={this.onIncreaseMangoCount}
                className="button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                onClick={this.onIncreaseBananaCount}
                className="button"
                type="button"
              >
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
