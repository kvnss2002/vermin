import React, { Component } from "react";
class Products extends Component {
    render() {
        return (
            <div>
        <div class="img"></div>
          <div class="center">
          <h1 class="weights">PRODUCTS:</h1>
          <div class="row">
          <div class="column">
            <img src="product 1.jpg" alt="cakes" width="70%"  height="200px"></img>
            <h1>CAKES</h1>
            <hr></hr>
            <br></br>
            <ul>
            <li>Chocolate Photo Cake.</li>
            <br></br>
            <li>Chocolate Designer Cake.</li>
            <br></br>
            <li>Heart Shaped Chocolate Cake.</li>
            <br></br>
            <li>Double Heart-Shaped Chocolate Cake.</li>
            <br></br>
            <li>Truffle Cake.</li>
            <br></br>
            <li>Chocolate Lava Cake.</li>
            </ul>
          </div>
          <div class="column">
            <img src="product2.jpg" alt="donuts" width="70%" height="200px"></img>
            <h1>DONUTS</h1>
            <hr></hr>
            <br></br>
            <ul>
            <li>Chocolate Frosted Doughnut.</li>
            <br></br>
            <li>Cinnamon Twist Doughnut.</li>
            <br></br>
            <li>Cruller.</li>
            <br></br>
            <li>Strawberry Frosted Doughnut.</li>
            <br></br>
            <li>Old-fashioned Doughnut.</li>
            <br></br>
            <li>Jelly Doughnut.</li>
            </ul>
          </div>
          <div class="column">
            <img src="product3.jpg" alt="pizza" width="70%"  height="200px"></img>
          <br></br>
          <h1>PIZZA'S</h1>
          <hr></hr>
          <br></br>
          <ul>
            <li>Margherita. </li>
            <br></br>
            <li>Double Cheese Margherita.</li>
            <br></br>
            <li>Farm House.</li>
            <br></br>
            <li>Peppy Paneer.</li>
            <br></br>
            <li>Mexican Green Wave.</li>
            <br></br>
            <li>Deluxe Veggie.</li>
            </ul>
          </div>
          <div class="column">
            <img src="product4.jpg" alt="pizza" width="70%"  height="200px"></img>
          <h1>ICE-CREAMS</h1>
          <hr></hr>
          <br></br>
          <ul>
            <li>Vanilla.</li>
            <br></br>
            <li>Chocolate.</li>
            <br></br>
            <li>Butter pecan.</li>
            <br></br>
            <li>Strawberry.</li>
            <br></br>
            <li>Neapolitan.</li>
            <br></br>
            <li>Chocolate chip.</li>
            </ul>
          </div>
        </div>
           
           </div>
           
        
        </div>
        );
    }
}
export default Products;