import image from '../assets/news.jpg'

const NewsItem = (props) => {
  const {title,description,src,url} = props
  return (
<div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-1 py-1" style={{maxWidth:"345px"}}>
  <img src={src?src:image}  style={{height:"200px",width:"335px"}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores quisquam eligendi, quaerat accusantium deleniti"}</p>
    <a href={url} className="btn btn-primary" target="_blank">Read More</a>
  </div>
</div>
  )
}

export default NewsItem