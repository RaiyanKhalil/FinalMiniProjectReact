import '../App.css';

var array = [];

for(let i = 0 ; i < 6;i++){
    array.push(           
     <div class="card col-12 col-md-4 col-lg-3">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>)
}



const Blogs = () => {
    return (
        <div className="row">
            {array}
        </div>

    )
};

export default Blogs;
  