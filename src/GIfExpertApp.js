import  React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    //const categories = ['One Puch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Puch']);

    // const handleAdd = () => {
    //     //setcategories([...categories, 'Dead Note']);
    //     //setcategories(cats => [...cats, 'Dead Note']);
    //     setcategories(categories.concat('Dead Note'));
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd} >Agregar</button> */}

            <ol>
            {
                categories.map(category => 
                <GifGrid 
                    key={category}
                    category={category}
                />
                )
            }
            </ol>
        </>
    );
}
export default GifExpertApp;