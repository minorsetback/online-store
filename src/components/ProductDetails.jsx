import { useStore } from "../bus/store/hooks/useStore"
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import { Button, Spinner } from "react-bootstrap";

const ProductDetails = () => {
    let { id } = useParams();
    const { data, isFetching, error } = useStore(id)

    if (isFetching) {
        return (
            <Spinner animation="border" role="status" className="loader">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    if (error) {
        return (
            <Toast>
                <Toast.Body>{error}</Toast.Body>
            </Toast>
        )
    }
    
    return (
        <div className="w-75 mx-auto mt-5">
            <Link to="/"><Button variant="outline-success" className='mb-2'>Go back</Button></Link>
            <Card>
                <Card.Img variant="top" className="w-25 mt-2 m-auto" src={data?.image} />
                <Card.Body>
                    <Card.Title className="w-2">{data?.title}</Card.Title>
                    <Card.Text>price: {data?.price}$</Card.Text>
                    <Card.Text>category: {data?.category}</Card.Text>
                    <Card.Text>rating: {data?.rating?.rate}</Card.Text>
                    <Card.Text>count: {data?.rating?.count}</Card.Text>
                    <Card.Text>description: {data?.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ProductDetails