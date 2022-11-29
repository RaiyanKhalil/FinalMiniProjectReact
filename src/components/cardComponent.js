import '../App.css';

const CardComponent = (props) => {
    return(
        <div className="column" >
            <div className="card">
            <img className="img-css" src="https://randomuser.me/api/portraits/men/75.jpg" alt="place-holder-image" />
            <h3>{props.data.name}</h3>
            <a href={props.data.web_pages[0]}>{props.data.domains[0]}</a>
            <p>Some text</p>
            </div>
        </div>
    )
}

export default CardComponent