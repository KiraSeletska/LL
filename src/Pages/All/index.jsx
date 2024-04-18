import { useSelector } from "react-redux";
import { SmallCard } from "../../components/SmallCard";
import { useState, useEffect } from "react";

export const All = () => {
  const [filteredData, setFilteredData] = useState([]);

  const data = useSelector((state) => state.dictionary.dictionary);

  useEffect(() => {
      const filtered = data.filter(item => !item.status);
      setFilteredData(filtered);
  }, [data]);

  return (
    <div>
      ALL in progress
      {filteredData.map((el, i) => <SmallCard key={i} props={el} />)}
    </div>
  );
};
