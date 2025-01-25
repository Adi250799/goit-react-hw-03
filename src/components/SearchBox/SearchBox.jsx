import styles from './SearchBox.module.css'; // Importujemy moduł CSS

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
