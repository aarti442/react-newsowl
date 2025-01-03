import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      total: 0
    };

  }

  onhandlePrev = async () => {
    this.setState({ loading: true });
    const elements = document.getElementsByClassName('Newsdata');
    for (let element of elements) {
      element.style.opacity = "0.3";
    }
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4107195579fd45578f2ced108468db9b&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json()
    //console.log(parseData);
    this.setState({ articles: parseData.articles, page: this.state.page - 1, loading: false });
    for (let element of elements) {
      element.style.opacity = "1";
    }
  }
  onhandleNext = async () => {
    this.setState({ loading: true });

    // Set opacity for elements with the class 'Newsdata'
    const elements = document.getElementsByClassName('Newsdata');
    for (let element of elements) {
      element.style.opacity = "0.3";
    }

    // Fetch data from the API
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4107195579fd45578f2ced108468db9b&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();

    // Update state
    this.setState({ articles: parseData.articles, page: this.state.page + 1, loading: false });

    // Restore opacity
    for (let element of elements) {
      element.style.opacity = "1";
    }
  };

  async componentDidMount() {
   this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&category=${this.props.category}`;

    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json()
    //console.log(parseData);
    this.props.setProgress(60)
    this.setState({ articles: parseData.articles, total: parseData.totalResults, loading : false });
    this.props.setProgress(100)
  }

  fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4107195579fd45578f2ced108468db9b&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page + 1}`;

    let data = await fetch(url);
    let parseData = await data.json()
    //console.log(parseData);
    this.setState({ articles: this.state.articles.concat(parseData.articles), total: parseData.totalResults,  page: this.state.page + 1 });
  };

  render() {
    return (
      
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.total}
        loader={<Spinner />}
      >
        
        <div className='container'>

        <h4 className="p-3" style={{ marginTop: "50px" }}>Recent News</h4>
          {this.state.loading && <Spinner />}

          <div className='Newsdata'>

            <div className='row'>
              {this.state.articles.map((element) => {
                console.log(element)
                return (
                  <div className='col-md-3'>
                    <NewsItems data={element} />
                  </div>
                );
              })}
            </div>



          </div>
          {/* <div className='row'>
          <div className='d-flex justify-content-between py-3'>
            {this.state.page > 1 && (
              <button type="button" onClick={this.onhandlePrev} class="btn btn-primary">&larr; Prev</button>
            )}
            
            {this.state.page + 1 < Math.ceil(this.state.total / this.props.pageSize) && (
              <button type="button" onClick={this.onhandleNext} className="btn btn-primary">
                Next &rarr;
              </button>
            )}
          </div>
        </div> */}
        </div>
      </InfiniteScroll>
    )
  }
}
