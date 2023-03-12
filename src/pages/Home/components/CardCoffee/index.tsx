import { Coffee, ShoppingCartSimple } from "phosphor-react";
import { ContainerCardCoffee, PriceAmount } from "./styles";

import imgExpressoTradicional from "../../../../assets/coffees/black.svg";
import imgExpressoAmericano from "../../../../assets/coffees/americano.svg";
import imgExpressoCremoso from "../../../../assets/coffees/expressocremoso.svg";
import imgExpressoGelado from "../../../../assets/coffees/cafegelado.svg";
import imgCafeComLeite from "../../../../assets/coffees/cafecomleite.svg";
import imgLatte from "../../../../assets/coffees/latte.svg";
import imgCapuccino from "../../../../assets/coffees/capuccino.svg";
import imgMacchiato from "../../../../assets/coffees/macchiato.svg";
import imgMocaccino from "../../../../assets/coffees/mochaccino.svg";
import imgChocolateQuente from "../../../../assets/coffees/chocolatequente.svg";
import imgCubano from "../../../../assets/coffees/cubano.svg";
import imgHavaiano from "../../../../assets/coffees/havaiano.svg";
import imgArabe from "../../../../assets/coffees/arabe.svg";
import imgIrlandes from "../../../../assets/coffees/irlandes.svg";
import { useContext, useEffect, useState } from "react";
import { CarrinhoCompraContext } from "../../../../contexts/CarrinhoCompraContext";

interface CoffeeAtCart {
  id: string;
  amount: number;
  alreadyInCart: boolean;
}

interface CardCoffeeProps {
  id: string;
  tipo: string[];
  nome: string;
  info?: string;
  preco: number;
  addRemoveCoffeeToCart: (id: string, amount: number) => void;
  increaseAmountOfCoffee: (id: string) => void;
  decreaseAmountOfCoffee: (id: string) => void;
}

interface Coffee {
  id: string;
  amount: number;
  alreadyInCart: boolean;
  price: number;
  name: string;
}

export function CardCoffee({
  id,
  tipo,
  nome,
  info,
  preco,
  addRemoveCoffeeToCart,
  increaseAmountOfCoffee,
  decreaseAmountOfCoffee,
}: CardCoffeeProps) {
  const { selectedCoffees } = useContext(CarrinhoCompraContext);
  const [coffee, setCoffee] = useState({} as Coffee);

  function addRemoveCoffee() {
    addRemoveCoffeeToCart(id, coffee.amount);
  }

  function increaseCoffee() {
    increaseAmountOfCoffee(id);

    let actualCoffee = selectedCoffees.filter((c) => c.id == id);
    setCoffee(actualCoffee[0]);
  }

  function decreaseCoffee() {
    decreaseAmountOfCoffee(id);

    let actualCoffee = selectedCoffees.filter((c) => c.id == id);
    setCoffee(actualCoffee[0]);
  }

  return (
    <ContainerCardCoffee>
      {/**
       * Abordagem ruim, normalmente é melhor pegar o link da
       * imagem vindo do backend, utilizar assim somente para estudos
       */}
      {id === "expressotradicional" && (
        <img src={imgExpressoTradicional} alt="Xícara de café tradicional" />
      )}
      {id === "expressoamericano" && (
        <img src={imgExpressoAmericano} alt="Xícara de expresso americano" />
      )}
      {id === "expressocremoso" && (
        <img src={imgExpressoCremoso} alt="Xícara de expresso cremoso" />
      )}
      {id === "expressogelado" && (
        <img src={imgExpressoGelado} alt="Xícara de expresso gelado" />
      )}
      {id === "cafecomleite" && (
        <img src={imgCafeComLeite} alt="Xícara de café com leite" />
      )}
      {id === "latte" && <img src={imgLatte} alt="Xícara de café latte" />}
      {id === "capuccino" && (
        <img src={imgCapuccino} alt="Xícara de capuccino" />
      )}
      {id === "macchiato" && (
        <img src={imgMacchiato} alt="Xícara de macchiato" />
      )}
      {id === "mocaccino" && (
        <img src={imgMocaccino} alt="Xícara de mocaccino" />
      )}
      {id === "chocolatequente" && (
        <img src={imgChocolateQuente} alt="Xícara de chocolate quente" />
      )}
      {id === "cubano" && <img src={imgCubano} alt="Xícara de café cubano" />}
      {id === "havaiano" && (
        <img src={imgHavaiano} alt="Xícara de café havaiano" />
      )}
      {id === "arabe" && <img src={imgArabe} alt="Xícara de café Árabe" />}
      {id === "irlandes" && (
        <img src={imgIrlandes} alt="Xícara de café irlandes" />
      )}
      <div className="containerTipo">
        {tipo.map((tipo) => {
          return (
            <span key={`${id}${tipo}`} className="tipo">
              {tipo}
            </span>
          );
        })}
      </div>

      <h2>{nome}</h2>
      <span className="info">{info}</span>
      <PriceAmount>
        <div className="price">
          <span>
            {preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="amount">
          <button onClick={decreaseCoffee}>-</button>
          <span>{coffee?.amount ? coffee.amount : 0}</span>
          <button onClick={increaseCoffee}>+</button>
        </div>
        <div className="cart">
          <button onClick={addRemoveCoffee}>
            {<ShoppingCartSimple size={22} />}
          </button>
        </div>
      </PriceAmount>
    </ContainerCardCoffee>
  );
}
