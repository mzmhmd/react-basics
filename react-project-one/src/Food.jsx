function Food(){

    const food01 = "Orange";
    const food02 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food01}</li>
            <li>{food02.toUpperCase()}</li>
        </ul>
    );
}

export default Food