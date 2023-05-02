/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headCount: 0,
    tailsCount: 0,
  }

  onClickBtn = () => {
    const {headCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let latestHeadCount = headCount
    let imageUrl = ''
    let latestTailCount = tailsCount
    if (tossResult === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadCount += 1
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailCount += 1
    }
    this.setState({
      imgUrl: imageUrl,
      headCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {imgUrl, headCount, tailsCount} = this.state
    const totalCount = headCount + tailsCount

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgUrl} className="image" alt="toss result" />

          <div>
            <button className="btn" type="button" onClick={this.onClickBtn}>
              Toss Coin
            </button>
          </div>
          <div className="list-card">
            <p className="para">Total: {totalCount}</p>
            <p className="para">Heads: {headCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
