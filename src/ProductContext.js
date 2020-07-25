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
  };

  minus = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
  };

  removeItem = (id) => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });
    this.setState({ cart: cart });
  };
  render() {
    const { products, cart } = this.state;
    const { addCart, minus, add, removeItem } = this;
    return (
      <ProductContext.Provider
        value={{ products, cart, addCart, removeItem, minus, add }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
