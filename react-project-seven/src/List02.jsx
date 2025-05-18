function List02() {
    const fruits = [{ id: 1, name: "apple", calories: 55 },
    { id: 2, name: "orange", calories: 66 },
    { id: 3, name: "banana", calories: 77 },
    { id: 4, name: "coconut", calories: 88 },
    { id: 5, name: "pineapple", calories: 99 },
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHA
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); REVERSE ALPHA
    // fruits.sort((a, b) => a.calories - b.calories); NUMERIC
    fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    const listItems = fruits.map(fruit => <li key={fruits.id}>
        {fruit.name}: <b>{fruit.calories}</b>
    </li>);

    return (<ul>{listItems}</ul>);
}

export default List02