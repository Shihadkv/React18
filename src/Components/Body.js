import RestaurantCard from "./RestaurantCard";
import Skeleton from "./Skeleton";
import '../css/Skeleton.css';
import { useEffect, useState } from "react";

const Body = () => {
  // Use useState to initialize and manage the restaurant data
  const [resLists, setResLists] = useState([]);
  const [filteredResLists, setFilteredResLists] = useState([])
  const [loading, setLoading] = useState('loading');
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      
      console.log(loading)
      // Set the restaurant data to the state variable
      //console.log(data?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants);
      setResLists(data?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants);
      setFilteredResLists(data?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants)
   
      setLoading("unloading")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterClick = () => {
    // Filter the data based on your criteria
    console.log("resLists",resLists)
    const filteredData = resLists.filter(
      (result) => result.info.avgRating > 4.3
    );
    console.log(filteredData)

    // Update the state with the filtered data
    setFilteredResLists(filteredData);
  };

  const searchBar = () => {
    // Filter the data based on your criteria
    
    const searchData = resLists.filter(
      (result) => result.info.name.includes(searchText) 
    );
    console.log(searchData)

    // Update the state with the filtered data
    setFilteredResLists(searchData);
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
            <input type = 'text' className="search-box" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}/>
            {console.log(searchText)}
            <button className="btn-search"  onClick={searchBar}>Search</button>
            <button className="filter-btn" onClick={handleFilterClick}>
          Top rated restaurants
        </button>
        </div>
        
      </div>
      <div className="res-container">
       { loading === "loading"? (
          <Skeleton />
        ) :
       (filteredResLists.map((restaurant) => (
        <RestaurantCard key={restaurant.widgetId} resData={restaurant.info} />
      )))}
</div>
    </div>
  );
};

export default Body;
