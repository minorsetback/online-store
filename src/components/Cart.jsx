import { useCart } from "react-use-cart";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/esm/Stack";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) {
        return (<h2 className="text-center mt-5">Cart Empty</h2>)
    }

    return (
        <div className="wrapper">
            <h2 className="mx-auto w-75 mt-3">Count: {totalUniqueItems}</h2>
            <ListGroup className="mx-auto w-75">
                {items.map((item, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between">
                        <p className="mt-3">{item.quantity} x {item.title}</p>
                        <Stack direction="horizontal" gap={3} >
                            <Button className='' variant={'primary'}
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </Button>
                            <Button variant={'primary'}
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </Button>
                            <Button variant={'danger'} onClick={() => removeItem(item.id)}>&times;</Button>
                        </Stack>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Cart