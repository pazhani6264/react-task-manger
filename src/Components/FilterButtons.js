function FilterButtons({ filter, setFilter }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={() => setFilter("0")} disabled={filter === "0"}>All</button>
      <button onClick={() => setFilter("1")} disabled={filter === "1"}>Completed</button>
      <button onClick={() => setFilter("2")} disabled={filter === "2"}>Incomplete</button>
    </div>
  );
}

export default FilterButtons;