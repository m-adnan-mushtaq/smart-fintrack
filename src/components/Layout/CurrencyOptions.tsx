import React from 'react'
import { currencies } from "@/lib/common/commont";
import { CreateUserType } from "@/lib/dto";
import { SetStateAction, useMemo, useState } from "react";

const CurrencyOptions = ({setUser}:{setUser:React.Dispatch<SetStateAction<CreateUserType>>}) => {
  const [open, SetOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    const target = event.currentTarget as HTMLLIElement;
    const symbol = target.querySelector("span.symbol") as HTMLSpanElement;
    const value=symbol.innerText
    setInput(value);
    setUser((prevUser)=>({
      ...prevUser,
      currency:value
    }))
  };
  const filteredList = useMemo(() => {
    const regex = new RegExp(input, "igm");
    // if(!input.length) return currencies
    return currencies.filter(
      (currency) => regex.test(currency.name) || regex.test(currency.symbol)
    );
  }, [input]);
  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    SetOpen(true);
    setInput(value);
    setUser((prevUser)=>({
      ...prevUser,
      currency:value
    }))
  };

  return (
    <div className="relative">
      <label htmlFor="currency" className="label">
        Currency
      </label>
      <input
        type="text"
        placeholder="Choose Currency"
        className="input input-bordered w-full"
        value={input}
        onChange={inputHandler}
        onFocus={() => {
          SetOpen(true);
        }}
        onBlur={() => {
          SetOpen(false);
        }}
      />
      <label className="label">
    <span className="label-text-alt"></span>
    <span className="label-text-alt">Select one of supported currencies</span>
  </label>
      <ul
        className={`absolute z-10 menu menu-lg ${
          !open ? "opacity-0 invisible" : ""
        } translate-y-2 transition-all s bg-base-100 w-full block rounded-box max-h-[10rem] overflow-y-auto`}
      >
        {!filteredList.length ? (
          <li className="opacity-75">No currencies to show</li>
        ) : (
          filteredList.map((elm) => (
            <li
              className="text-sm cursor-pointer flex w-full flex-nowrap items-center flex-row hover:bg-neutral p-1"
              onClick={clickHandler}
              key={elm.symbol}
            >
              <span className="text-sm hover:bg-transparent font-bold symbol">
                {elm.symbol}
              </span>
              <span className="text-sm hover:bg-transparent ms-4 border-opacity-75">
                {elm.name}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default React.memo(CurrencyOptions);
