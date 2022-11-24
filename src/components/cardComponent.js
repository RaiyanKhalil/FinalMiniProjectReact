import '../App.css';

const CardComponent = () => {

    return(
        // <div className="cardBody">
        //     <img className="img-css" src="https://randomuser.me/api/portraits/men/75.jpg" alt="place-holder-image" />
        //     <p>Name: Jennie Nicolas</p>
        //     <p>Email: johndoe@example.com</p>
        //     <p>Phone: 2222222222</p>
        //     <p>Address: V0M 4O9</p>
        // </div>
        <div class="column">
            <div class="card">
            <img className="img-css" src="https://randomuser.me/api/portraits/men/75.jpg" alt="place-holder-image" />
            <h3>Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
            </div>
        </div>
    )
}

export default CardComponent