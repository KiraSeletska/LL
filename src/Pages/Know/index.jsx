import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SmallCard } from "../../components/SmallCard";

export const Know = () => {
    const [filteredData, setFilteredData] = useState([]);

    const data = useSelector((state) => state.dictionary.dictionary);

    useEffect(() => {
        const filtered = data.filter(item => item.status);
        setFilteredData(filtered);
    }, [data]);

    return (
        <div>
            All done
            {filteredData.map((el, i) => 
                <SmallCard key={i} props={el} />
            )}
        </div>
    );
}
