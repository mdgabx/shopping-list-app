const { useState } = React;

const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

export const ShoppingList = () => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => item);

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        /> 
        <p id="search-description">Type to filter the list below:</p>
        <ul>
          <p></p>
        </ul>
      </form>
    </div>
  );
};