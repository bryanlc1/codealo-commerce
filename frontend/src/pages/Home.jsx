import { useState } from "react";
import { useEffect } from "react";

import Categories from "../components/Categories";
import CardProduct from "../components/CardProduct";
import { getProducts } from "../services/Products";

import '../styles/Home.css'
const Home = () => {
    const [products, setProducts] = useState();
    const [vewMore, setVewMore] = useState(false);

    useEffect(() => {
        getProducts().then(res => setProducts(res))
    }, []);

    function createCardsProducts(item) {
        return (
            <CardProduct title={item.title} price={item.price} image={item.image.formats.small?.url} />
        )
    }

    console.log(products)
    const productsList = products?.map(createCardsProducts)
    return (
        <>
            <Categories />
            <section className="contCardsProducts">
                {vewMore ? productsList.slice(0,3):productsList}
            </section>
            <button onClick={()=>setVewMore(!vewMore)} className="fixedVewMore">{vewMore?'Ver mas': 'Ver menos'}</button>

        </>
    )
}

export default Home;