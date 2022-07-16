import {useState, useEffect} from "react";
import {getAllCategories} from "../api";
import {Preloder} from "../components/preloder";
import {CategoryList} from "../components/categoryList";

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
        })
    }, [])

    return <>
        {!catalog.length ? <Preloder /> : (
            <CategoryList catalog={catalog} />
        )}
    </>
}

export {Home}