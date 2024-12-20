import React from 'react';
import ReactDOM from 'react-dom/client';

var root = document.getElementById("root");
var mainroot = ReactDOM.createRoot(root);
const Header = function(){
    return(
        <div className="header-div">
            <div className="logo-div">
                <img
                className="logo"
                src="https://similarpng.com/chef-restaurant-logo-illustrations-template-on-transparent-background-png/"
                />
                </div><div className="menu-div">
                    <img
                    className="logo"
                    src="https://www.dreamstime.com/menu-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-image134155746"
                    />
            </div>
        </div>
    );
};    
  var res1 = {name: "Biryani", avgRating:"4.5",
             deliveryTime: "30 mins" };
          const Body = function(){
            return (
            <div className="body-div">
             <RestaurantCard resObj={res1} />
             <RestaurantCard resObj={res2} />
             </div> 
             );
             };
            
            const RestaurantCard = (props) => {
            
            return (
            <div className="res-card" style={{
                backgroundColor: "#f0f0f0" }}>
             <img className="res-logo"
             alt="res-logo"
             src="https://www.shutterstock.com/image-vector/biryani-restaurant-logo-vector-illustration-2096649406" 
             />
            <h3>{props.resObj.name}</h3>
            <h4>{props.resObj.cuisines.join(", ")}</h4>
            <h4>{props.resObj.avgRating}</h4>
            <h4>{props.resObj.deliveryTime}</h4>
            </div>
            
            );
        };
mainroot.render(<Header />)       