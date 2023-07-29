import { useMemo, useState } from "react";

const currencies = ["usd", "pkr"];

const CurrencyOptions = () => {
  const [selectedOption, setSelectOptions] = useState<NullableString>();
  const [open, SetOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const target=event.target as HTMLLIElement
    setInput(target.innerText)
    setSelectOptions(target.innerText)
  };
  const filteredList = useMemo(() => {
    const regex = new RegExp(input, "igm");
    return currencies.filter((currency) => regex.test(currency));
  }, [input]);
  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    SetOpen(true);
    setInput(value);
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
        onBlur={()=>{SetOpen(false)}}
      />
      <ul
        className={`absolute z-10 menu menu-lg ${
          !open ? "opacity-0 invisible" : "" 
        } translate-y-2 transition-all s bg-base-200 w-full rounded-box`}
      >
        {filteredList.map((elm) => (
          <li className="text-xl cursor-pointer hover:bg-neutral p-1" onClick={clickHandler} key={elm}>{elm}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyOptions;
