import PropTypes from "prop-types"

function Student(props) {

    return (
        <div className="student">
            <p>Name ➡ {props.name}</p>
            <p>Age ➡ {props.age}</p>
            <p>Qulified ➡ {props.isQualified ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isQualified : PropTypes.bool,
}

Student.defaultProps = {
    name: "guest",
    age: 0,
    isQualified: false,
  }

export default Student