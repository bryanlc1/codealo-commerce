import { Card,Stack } from "react-bootstrap";
import '../styles/CardProduct.css'
const CardProduct = ({title,price,image}) => {
    return (
        <>
            <Card className="cardProduct text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image?`https://codealo-commerce-cms.onrender.com${image}`:`src/assets/codealo.png`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    <span className="price">{price} $</span>
                    </Card.Text>
                    <Stack gap={2}>
                    <button className="btnCard">Añadir al carrito</button>
                    <button className="btnCard">Ver mas</button>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardProduct;