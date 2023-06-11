import { Component } from "react";
import Spiner from "./Spiner";
import NewsItem from "./NewsItem";

class News extends Component {
    constructor(props) {
        super()
        this.state = { articles: [], loading: false, page: 1 }
        // headline and title
        const captilize = (a) => {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }
        this.cate = `Top ${captilize(props.category)}`
        document.title = this.cate
    }

    async updateNews() {
        this.setState({ loading: true })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c2405ba01164f1bb465f5c5f59bb907&page=${this.state.page}&pageSize=${this.props.page}`);
        let dataJson = await data.json();
        this.setState({ articles: dataJson.articles, loading: false })
    }

    async componentDidMount() {
        this.updateNews()
    }

    prevPage = async () => {
        this.updateNews()
        this.setState({ page: this.state.page - 1 })
    }

    nextPage = async () => {
        this.updateNews()
        this.setState({ page: this.state.page + 1 })
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: "35px 0px" }}> {this.cate} headlines</h1>
                {this.state?.loading && <Spiner />}    {/* if loading true then spiner will be shown or else not */}
                <div className="row">
                    {!this.state?.loading && this.state?.articles?.map((e) => {
                        // {/* if loading false then content will be shown or else not  */ }
                        return <div className="col-md-4" key={e.url}>
                            <NewsItem title={e.title ? e.title?.slice(0, 40) : ""} discription={e.description ? e.description.slice(0, 40) : ""} imageUrl={e.urlToImage ? e.urlToImage : "https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/bda3ef1394e93d39b36a9aa6305e7c64jpg_1_1670807253601_1670807253842_1670807253842.jpg"} newsUrl={e.url} publishedAt={e.publishedAt} author={e.author ? e.author : "unknow"} source={e.source.name} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between ">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.prevPage} className="btn btn-dark">&larr;Previous</button>
                        <button type="button" onClick={this.nextPage} className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;