import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import List from "./components/List";
import { object } from "./data";
import Shop from "./components/shop";

function App() {
    const [articles, setArticles] = useState(object.articles);
    const [sum, setSum] = useState(object.sum);
    const [shop, setShop] = useState([]);

    const increment = (id) => {
        let newTable = articles.map((elt) => {
            if (elt.id === id) {
                return {...elt, qte: elt.qte + 1 };
            } else {
                return elt;
            }
        });
        setArticles(newTable);
    };

    const decrement = (id) => {
        let newTable = articles.map((elt) => {
            if (elt.id === id && elt.qte > 0) {
                return {...elt, qte: elt.qte - 1 };
            } else {
                return elt;
            }
        });
        setArticles(newTable);
    };

    const hendelSumIncrement = (id) => {
        let foundArticle = articles.find((elt) => elt.id === id);
        setSum(sum + foundArticle.price);
    };

    const hendelSumDecrement = (article) => {
        if (article.qte > 0) {
            setSum(sum - article.price);
        }
    };

    const addToCart = (article) => {
        let exist = shop.find((elt) => elt.id === article.id);
        if (!exist) {
            setShop([...shop, article]);
        } else {
            alert("hgshvhsvhvshcs");
        }
        console.log(shop);
    };
    return ( <
        div style = {
            { display: "flex" } }
        className = "App" >
        <
        List articles = { articles }
        sum = { sum }
        increment = { increment }
        decrement = { decrement }
        hendelSumIncrement = { hendelSumIncrement }
        hendelSumDecrement = { hendelSumDecrement }
        addToCart = { addToCart }
        /> <
        Shop shop = { shop }
        /> <
        /div>
    );
}

export default App;