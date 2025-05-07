import propTypes from "prop-types"

function Greetings(props) {

    // if(props.isLogged){
    //     return <h2 className="welcomeMsg">Welcome {props.username}!</h2>
    // }
    // else{
    //     return <h2 className="errorMsg">Please login to continue...</h2>
    // }

    const welcomeMsg = <h2 className="welcomeMsg">Welcome {props.username}!</h2>;
    const errorMsg = <h2 className="errorMsg">Please login to continue...</h2>;

    return (props.isLogged ? welcomeMsg : errorMsg);
}

Greetings.proptypes = {
    isLogged: propTypes.bool,
    username: propTypes.string,
}

Greetings.defaultProps = {
    isLogged: false,
    username: "guest",
}

export default Greetings