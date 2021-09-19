import { useEffect, useState } from "react"
import TopNavSearch from "./TopNavSearch"


const SearchPage = (props) => {
    const [y, setY] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setY(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="big-cont-home">
            <TopNavSearch y={y} setY={setY}/>            

        </div>
    )
}

export default SearchPage