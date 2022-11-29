import '../App.css';

const CardComponent = (props) => {
    // console.log(style)
    return(
        <div class="column" >
            <div class="card">
            <img className="img-css" src="https://randomuser.me/api/portraits/men/75.jpg" alt="place-holder-image" />
            <h3>{props.data.name}</h3>
            <a href={props.data.domains[0]}>{props.data.domains[0]}</a>
            <p>Some text</p>
            </div>
        </div>
    )
}

export default CardComponent