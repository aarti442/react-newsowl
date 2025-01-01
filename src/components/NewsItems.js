import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {data} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem;"}}>
          <img src={data.urlToImage ? data.urlToImage : "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg"} className="card-img-top" alt={data.title}/>
            <div className="card-body">
              <h6 className="card-title">{data.title}</h6>
              <p className="card-text">{data.description}</p>
              <a href={data.url} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
