function Cart(props) {
    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td><img src={props.image} alt="" width="25px" height="25px" /></td>
                <td>{props.cost}</td>
                <td>{props.count}</td>
                <td>{props.totalCost}</td>
                <td><button className="minus-goods" data-key={props.articul}>Удалить</button></td>
                <td><button className="remove-goods" data-key={props.articul}>Удалить всё</button></td>
            </tr>
        </>
    );
}

export default Cart;