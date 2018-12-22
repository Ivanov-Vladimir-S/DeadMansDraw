import React, { Component } from "react";
import Player from "./Player";
import Table from "./Table";
import End from "./End";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name: "Галлагер",
        avator:
          "https://raw.githubusercontent.com/copypastepirates/treasuresisland/master/img/Gallager.png",
        class: "player1"
      },
      player2: {
        name: "Чёрная Бонни",
        avator:
          "https://raw.githubusercontent.com/copypastepirates/treasuresisland/master/img/Bonny.png",
        class: "player2"
      },
      currentPlayer: 1,
      deck: [
        {
          value: 1,
          type: "Anchor",
          image: "id1"
        },
        {
          value: 2,
          type: "Anchor",
          image: "id2"
        },
        {
          value: 3,
          type: "Anchor",
          image: "id3"
        },
        {
          value: 4,
          type: "Anchor",
          image: "id4"
        },
        {
          value: 5,
          type: "Anchor",
          image: "id5"
        },
        {
          value: 6,
          type: "Anchor",
          image: "id6"
        },
        {
          value: 1,
          type: "Key",
          image: "id7"
        },
        {
          value: 2,
          type: "Key",
          image: "id8"
        },
        {
          value: 3,
          type: "Key",
          image: "id9"
        },
        {
          value: 4,
          type: "Key",
          image: "id10"
        },
        {
          value: 5,
          type: "Key",
          image: "id11"
        },
        {
          value: 6,
          type: "Key",
          image: "id12"
        },
        {
          value: 1,
          type: "Kraken",
          image: "id13"
        },
        {
          value: 2,
          type: "Kraken",
          image: "id14"
        },
        {
          value: 3,
          type: "Kraken",
          image: "id15"
        },
        {
          value: 4,
          type: "Kraken",
          image: "id16"
        },
        {
          value: 5,
          type: "Kraken",
          image: "id17"
        },
        {
          value: 6,
          type: "Kraken",
          image: "id18"
        },
        {
          value: 1,
          type: "Kruk",
          image: "id19"
        },
        {
          value: 2,
          type: "Kruk",
          image: "id20"
        },
        {
          value: 3,
          type: "Kruk",
          image: "id21"
        },
        {
          value: 4,
          type: "Kruk",
          image: "id22"
        },
        {
          value: 5,
          type: "Kruk",
          image: "id23"
        },
        {
          value: 6,
          type: "Kruk",
          image: "id24"
        },
        {
          value: 1,
          type: "Map",
          image: "id25"
        },
        {
          value: 2,
          type: "Map",
          image: "id26"
        },
        {
          value: 3,
          type: "Map",
          image: "id27"
        },
        {
          value: 4,
          type: "Map",
          image: "id28"
        },
        {
          value: 5,
          type: "Map",
          image: "id29"
        },
        {
          value: 6,
          type: "Map",
          image: "id30"
        },
        {
          value: 1,
          type: "Pushka",
          image: "id31"
        },
        {
          value: 2,
          type: "Pushka",
          image: "id32"
        },
        {
          value: 3,
          type: "Pushka",
          image: "id33"
        },
        {
          value: 4,
          type: "Pushka",
          image: "id34"
        },
        {
          value: 5,
          type: "Pushka",
          image: "id35"
        },
        {
          value: 6,
          type: "Pushka",
          image: "id36"
        },
        {
          value: 5,
          type: "Rusalka",
          image: "id37"
        },
        {
          value: 6,
          type: "Rusalka",
          image: "id38"
        },
        {
          value: 7,
          type: "Rusalka",
          image: "id39"
        },
        {
          value: 8,
          type: "Rusalka",
          image: "id40"
        },
        {
          value: 9,
          type: "Rusalka",
          image: "id41"
        },
        {
          value: 1,
          type: "Shar",
          image: "id42"
        },
        {
          value: 2,
          type: "Shar",
          image: "id43"
        },
        {
          value: 3,
          type: "Shar",
          image: "id44"
        },
        {
          value: 4,
          type: "Shar",
          image: "id45"
        },
        {
          value: 5,
          type: "Shar",
          image: "id46"
        },
        {
          value: 6,
          type: "Shar",
          image: "id47"
        },
        {
          value: 1,
          type: "Sunduk",
          image: "id48"
        },
        {
          value: 2,
          type: "Sunduk",
          image: "id49"
        },
        {
          value: 3,
          type: "Sunduk",
          image: "id50"
        },
        {
          value: 4,
          type: "Sunduk",
          image: "id51"
        },
        {
          value: 5,
          type: "Sunduk",
          image: "id52"
        },
        {
          value: 6,
          type: "Sunduk",
          image: "id53"
        },
        {
          value: 1,
          type: "Sword",
          image: "id54"
        },
        {
          value: 2,
          type: "Sword",
          image: "id55"
        },
        {
          value: 3,
          type: "Sword",
          image: "id56"
        },
        {
          value: 4,
          type: "Sword",
          image: "id57"
        },
        {
          value: 5,
          type: "Sword",
          image: "id58"
        },
        {
          value: 6,
          type: "Sword",
          image: "id59"
        }
      ],
      raid: [],
      p1Hand: [],
      p2Hand: [],
      bust: 0,
      gameEnd: 0
    };
    this.shuffleArray = this.shuffleArray.bind(this);
    this.getCard = this.getCard.bind(this);
    this.getCash = this.getCash.bind(this);
    this.contin = this.contin.bind(this);

    let newDeck = this.state.deck.slice();
    newDeck = this.shuffleArray(newDeck);
    this.state.deck = newDeck;
  }
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  getCard() {
    if (this.state.deck.length && !this.state.bust) {
      let newDeck = this.state.deck.slice();
      let newRaid = this.state.raid.slice();

      let card = newDeck.pop();
      newRaid.push(card);

      let count = 0;
      for (let i = 0; i < newRaid.length; i++)
        for (let j = i + 1; j < newRaid.length; j++)
          if (newRaid[i].type === newRaid[j].type) count++;

      this.setState({
        deck: newDeck,
        raid: newRaid,
        bust: count
      });
    }
  }

  getCash() {
    let newP1Hand = this.state.p1Hand.slice();
    let newP2Hand = this.state.p2Hand.slice();
    let gameStatus = this.state.deck.length === 0 ? 1 : 0;
    if (
      this.state.bust === 0 &&
      this.state.raid[this.state.raid.length - 1].type !== "Kraken"
    ) {
      let newRaid = this.state.raid.slice();
      let newHand;
      if (this.state.currentPlayer) {
        newHand = this.state.p1Hand.slice();
        newHand = newHand.concat(newRaid);
        newP1Hand = newHand;
      } else {
        newHand = this.state.p2Hand.slice();
        newHand = newHand.concat(newRaid);
        newP2Hand = newHand;
      }
    }
    this.setState(prevState => ({
      raid: [],
      currentPlayer: !prevState.currentPlayer,
      gameEnd: gameStatus,
      p1Hand: newP1Hand,
      p2Hand: newP2Hand
    }));
  }

  scoreCount(arr) {
    return arr.reduce((acc, val) => acc + val.value, 0);
  }

  contin() {
    let newRaid = this.state.raid.slice();
    let newP1Hand = this.state.p1Hand.slice();
    let newP2Hand = this.state.p2Hand.slice();
    let gameStatus = this.state.deck.length === 0 ? 1 : 0;
    newRaid.pop();
    while (newRaid.length) {
      if (newRaid.pop().type === "Anchor") break;
    }
    let newHand;
    if (newRaid.length) {
      if (this.state.currentPlayer) {
        newHand = this.state.p1Hand.slice();
        newHand = newHand.concat(newRaid);
        newP1Hand = newHand;
      } else {
        newHand = this.state.p2Hand.slice();
        newHand = newHand.concat(newRaid);
        newP2Hand = newHand;
      }
    }

    this.setState(prevState => ({
      currentPlayer: !prevState.currentPlayer,
      raid: [],
      bust: !prevState.bust,
      gameEnd: gameStatus,
      p1Hand: newP1Hand,
      p2Hand: newP2Hand
    }));
  }

  render() {
    const p1Score = this.scoreCount(this.state.p1Hand);
    const p2Score = this.scoreCount(this.state.p2Hand);
    return (
      <div className="main-grid">
        <Player
          player={this.state.player1}
          score={p1Score}
          massage={this.state.currentPlayer ? "Ваш ход" : " "}
        />

        {this.state.gameEnd ? (
          <End winner={p1Score - p2Score} />
        ) : (
          <Table
            col={this.state.deck.length}
            getCard={this.getCard}
            getCash={this.getCash}
            card={this.state.raid}
            bust={this.state.bust}
            contin={this.contin}
            kraken={
              !this.state.bust &&
              this.state.raid.length > 0 &&
              this.state.raid[this.state.raid.length - 1].type === "Kraken"
            }
            anchor={
              !this.state.bust &&
              this.state.raid.length > 0 &&
              this.state.raid[this.state.raid.length - 1].type === "Anchor"
            }
            shar={
              !this.state.bust &&
              this.state.raid.length > 0 &&
              this.state.deck.length > 0 &&
              this.state.raid[this.state.raid.length - 1].type === "Shar"
            }
            deck={this.state.deck}
          />
        )}

        <Player
          player={this.state.player2}
          score={p2Score}
          massage={this.state.currentPlayer ? " " : "Ваш ход"}
        />
      </div>
    );
  }
}

export default App;
