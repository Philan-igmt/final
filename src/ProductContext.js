import React, { Component } from "react";
import uuid from "react-uuid";

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    products: [
      {
        name: "mathemathics",
        count: 1,
        id: uuid(),
        prize: 500,
        image:
          "https://cdn.usborne.com/catalogue/covers/eng/max_covers/9781474959940-maths_scribble_book.jpg?width=960&mode=min ",
      },
      {
        name: "physics",
        count: 1,
        id: uuid(),
        prize: 300,
        image:
          "https://textbooktrader.co.za/files/000545/gallery/00/00/04/00000480_medium-240.jpg",
      },
      {
        name: "biology",
        count: 1,
        id: uuid(),
        prize: 400,
        image: "https://covers.vitalbook.com/vbid/9780134446417/width/200",
      },
      {
        name: "science",
        count: 1,
        id: uuid(),
        prize: 200,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCdca1pmzrOKhI_SmnKex0PkSJ9-5H_BLxZA&usqp=CAU",
      },
      {
        name: "science",
        count: 1,
        id: uuid(),
        prize: 200,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/Science_Communication_%E2%80%93_schematic_overview.png",
      },
      {
        name: "science",
        count: 1,
        id: uuid(),
        prize: 200,
        image:
          "https://thumbs-prod.si-cdn.com/s-jZTk0XtVmp-89MlOgFXqaAVe4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
      },
      {
        name: "science",
        count: 1,
        id: uuid(),
        prize: 200,
        image:
          "https://thumbs-prod.si-cdn.com/s-jZTk0XtVmp-89MlOgFXqaAVe4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
      },
      {
        name: "science",
        count: 1,
        id: uuid(),
        prize: 200,
        image:
          "https://thumbs-prod.si-cdn.com/s-jZTk0XtVmp-89MlOgFXqaAVe4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("item already selected");
    }
  };

  add = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.addTotal();
  };

  minus = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.addTotal();
  };

  removeItem = (id) => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });
    this.setState({ cart: cart });
    this.addTotal();
  };

  addTotal = () => {
    const { cart } = this.state;
    const results = cart.reduce((prev, product) => {
      return prev + product.prize * product.count;
    }, 0);
    this.setState({ total: results });
  };

  //for the local storage
  componentDidUpdate() {
    localStorage.setItem("cart_data", JSON.stringify(this.state.cart));
    localStorage.setItem("total_data", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const cart_data = JSON.parse(localStorage.getItem("cart_data"));
    if (cart_data !== null) {
      this.setState({ cart: cart_data });
    }
    const total_data = JSON.parse(localStorage.getItem("total_data"));
    if (total_data !== null) {
      this.setState({ total: total_data });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, minus, add, removeItem, addTotal } = this;
    return (
      <ProductContext.Provider
        value={{
          products,
          cart,
          total,
          addCart,
          removeItem,
          minus,
          add,
          addTotal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
