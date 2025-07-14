function SearchBar({ setSearch }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;