import '../App.css';

const CardComponent = (props) => {

    function closeCard() {
        console.log("ss")
    }

    return(
        <div className="column" >
            <div className="card">
            <div class="modal-header">
                <h5 className="modal-title"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeCard()} ></button>
            </div>
                <img src="..." class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <a href={props.data.web_pages[0]}>{props.data.domains[0]}</a>
                </div>
            </div>
        </div>
    )
}

export default CardComponent