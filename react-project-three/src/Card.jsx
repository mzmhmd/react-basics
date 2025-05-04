import ProfilePic from "./assets/MZ.jpg"

function Card(){
 
    return(
        <div className="card">
            <img className="card-image" alt="profile-picture" src={ProfilePic} width="120px" height="150px"></img>
            <h2 className="card-title">MZ Muhammad</h2>
            <p className="card-text">An Undergraduate</p>
        </div>
    );
}

export default Card