import React, { Component } from "react";
import Card from "./Card";
import Massage from "./Massage";

class Table extends Component {
  render() {
    const num = this.props.col;
    const bust = this.props.bust;
    const kraken = this.props.kraken;
    const shar = this.props.shar;
    const anchor = this.props.anchor;
    let arr = "Следующая карта: ";
    const cardList = this.props.card.map(card => (
      <Card key={card.image} cImg={card.image} />
    ));
    if (shar) {
      let nextCardType = this.props.deck[this.props.deck.length - 1].type;
      switch (nextCardType) {
        case "Anchor":
          nextCardType = "Якорь";
          break;
        case "Key":
          nextCardType = "Ключ";
          break;
        case "Kraken":
          nextCardType = "Кракен";
          break;
        case "Kruk":
          nextCardType = "Крюк";
          break;
        case "Map":
          nextCardType = "Карта";
          break;
        case "Pushka":
          nextCardType = "Пушка";
          break;
        case "Rusalka":
          nextCardType = "Русалка";
          break;
        case "Shar":
          nextCardType = "Шар";
          break;
        case "Sunduk":
          nextCardType = "Сундук";
          break;
        case "Sword":
          nextCardType = "Сабля";
          break;
        default:
          break;
      }
      arr = arr + nextCardType;
    }
    return (
      <div className="table">
        <div className="deck">
          <div className="card" onClick={this.props.getCard}>
            <img
              alt="колода"
              className="card"
              src="https://cdn.zeplin.io/5baf34104512f44489fcc486/assets/71008E7E-B169-4621-8A4D-EE1FEB9B2EC8.png"
            />
          </div>
          <div className="counter">{num}</div>
        </div>
        <div className="cards" onClick={this.props.getCash}>
          {cardList}
        </div>

        {anchor && (
          <Massage className="anchor">
            Все карты, выложенные до якоря, сохраняются при провале
          </Massage>
        )}
        {kraken && (
          <Massage className="kraken">
            Кракен заставляет выложить ещё одну карту
          </Massage>
        )}
        {shar && <Massage className="shar">{arr}</Massage>}
        {bust && (
          <Massage className="bust" contin={this.props.contin}>
            ТЫСЯЧА ЧЕРТЕЙ! Рейд провален. Нажмите сюда, чтобы продолжить
          </Massage>
        )}
      </div>
    );
  }
}
export default Table;
