function List01(){
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(<ol>{listItems}</ol>);
}

export default List01