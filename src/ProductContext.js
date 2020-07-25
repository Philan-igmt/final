import React, { Component } from "react";
import uuid from "react-uuid";

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    products: [
      {
        name: "mathemathics",
        id: uuid(),
        prize: "R" + 500,
        image:
          "https://cdn.usborne.com/catalogue/covers/eng/max_covers/9781474959940-maths_scribble_book.jpg?width=960&mode=min ",
      },
      {
        name: "physics",
        id: uuid(),
        prize: "R" + 300,
        image:
          "https://textbooktrader.co.za/files/000545/gallery/00/00/04/00000480_medium-240.jpg",
      },
      {
        name: "biology",
        id: uuid(),
        prize: "R" + 400,
        image: "https://covers.vitalbook.com/vbid/9780134446417/width/200",
      },
      {
        name: "science",
        id: uuid(),
        prize: "R" + 200,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCdca1pmzrOKhI_SmnKex0PkSJ9-5H_BLxZA&usqp=CAU",
      },
      {
        name: "science",
        id: uuid(),
        prize: "R" + 200,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/Science_Communication_%E2%80%93_schematic_overview.png",
      },
      {
        name: "science",
        id: uuid(),
        prize: "R" + 200,
        image:
          "https://thumbs-prod.si-cdn.com/s-jZTk0XtVmp-89MlOgFXqaAVe4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
      },
    ],
    cart: [1, 12, 3, 3, 45, 6, 7, 88, 6],
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const data = products.filter((product) => {
      return product.id === id;
    });
    this.setState({ cart: [...cart, ...data] });
  };

  render() {
    const { products, cart } = this.state;
    const { addCart } = this;
    return (
      <ProductContext.Provider value={{ products, cart, addCart }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
