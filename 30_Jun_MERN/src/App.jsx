import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [currPage, setCurrpage] = useState(1);
  const [itemsperpage, setItemsPPage] = useState(10);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
    };
    fetchdata();
  }, []);
  // const debounceserach=()=>{
  //   let
  // }
  const filteredproduts = () => {
    let tempdata = [...products];
    if (search) {
      tempdata = tempdata.filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setCurrpage(1);
    setFiltered(tempdata);
    const startidx = (currPage - 1) * itemsperpage;
    const endidx = startidx + itemsperpage;
    setFiltered(tempdata.slice(startidx, endidx));
  };
  useEffect(() => {
    filteredproduts();
  }, [search, products, itemsperpage]);
  const handlesearch = (e) => {
    setSearch(e.target.value);
    setCurrpage(1);
  };
  const itemspp = (e) => {
    setItemsPPage(parseInt(e.target.value));
    setCurrpage(1);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter text"
        value={search}
        onChange={handlesearch}
      />
      <select value={itemsperpage} onChange={itemspp}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  ">
        {filtered.map((prod, idx) => {
          return (
            <div
              key={idx}
              className=" justify-items: center 
align-items: center border-4 border-black-200   "
            >
              <img src={prod.image} alt="" style={{ width: "200px" }} />
              <p>{prod.title}</p>
              <p>Price:$ {prod.price}</p>
              <p>{prod.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
