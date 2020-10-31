import { useRef } from "react";

export default function SearchPanel(props) {
  const input = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const elements = e.currentTarget;
    const ob = [...elements].reduce((acc, cur) => {
      const { name, value } = cur;
      return { ...acc, [name]: value };
    }, {});
    props.handleSearch(ob.search);
    input.current.focus();
  };

  const onClear = () => {
    props.handleSearch("");
    input.current.value = "";
    input.current.focus();
  };

  return (
    <form className="search-wrapper" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        ref={input}
        autoComplete="off"
        className="search-field"
        placeholder="Search for a movie ..."
      />
      <input
        type="button"
        className="clear-btn"
        onClick={onClear}
        name="clearbtn"
        value="X"
      />
      <input
        type="submit"
        className="search-btn"
        name="searchBtn"
        value="Search"
      />
    </form>
  );
}
