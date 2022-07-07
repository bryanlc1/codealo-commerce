import { Card, Stack } from "react-bootstrap";
import '../styles/CardProduct.css'
const CardProduct = ({ item }) => {
    return (
        <>
            <Card className="cardProduct text-center" style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={item.image ? `https://codealo-commerce-cms.onrender.com${item.image.url}` : `src/assets/codealo.png`} />
                <Card.Body>
                    <Card.Title>
                        Categorias:
                    </Card.Title>
                    <Card.Text>
                        <section className="contCardCategories">
                            {item.categories.map((cat,indx) => <span key={indx} className="cardCategories">{cat.name}</span>)}
                        </section>
                    </Card.Text>
                    <Card.Text>
                        <span className="price">{item.price} $</span>
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