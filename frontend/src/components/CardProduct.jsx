import { Card, Stack } from "react-bootstrap";
import '../styles/CardProduct.css'
const CardProduct = ({ title, price, image, categories }) => {
    return (
        <>
            <Card className="cardProduct text-center" style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={image ? `https://codealo-commerce-cms.onrender.com${image}` : `src/assets/codealo.png`} />
                <Card.Body>
                    <Card.Title>
                        Categorias:
                    </Card.Title>
                    <Card.Text>
                        <section className="contCardCategories">
                            {categories.map(cat => <span className="cardCategories">{cat.name}</span>)}
                        </section>
                    </Card.Text>
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