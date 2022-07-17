import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getAllCategories} from "../api";
import {Preloder} from "../components/preloder";
import {CategoryList} from "../components/categoryList";
import {Search} from "../components/search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const location = useLocation();
    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        console.log(location);

        navigate({
            pathname,
            search: `?search=${str}`
        })
    };

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ?
                data.categories.filter((item) =>
                item.strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLowerCase())
                ) : data.categories
            );
        })
    }, [search]);

    return <>
        <Search cb={handleSearch} />
        {!catalog.length ? <Preloder /> : (
            <CategoryList catalog={filteredCatalog} />
        )}
    </>
}

export {Home}