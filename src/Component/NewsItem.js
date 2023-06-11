import { Component } from "react";

class NewsItem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl, author, publishedAt} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-muted"> published by {author} on {new Date(publishedAt).toUTCString()}</small></p>

                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem;