import { useSelector } from "react-redux";
import { SmallCard } from "../../components/SmallCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const All = () => {
  
  const { id } = useParams();
  
  const [filteredData, setFilteredData] = useState([]);

  const data = useSelector((state) => state.dictionary.dictionary);

  useEffect(() => {
    let filtered = [];
    id === 'Done' 
    ? filtered = data.filter(item => item.status)
    : filtered = data.filter(item => !item.status)
    setFilteredData(filtered);
  }, [data, id]);
  

  return (
    <div>
      <h3> ALL in {id} </h3>
      {filteredData.map((el, i) => <SmallCard key={i} props={el} />)}
    </div>
  );
};
