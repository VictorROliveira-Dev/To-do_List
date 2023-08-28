const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:
                <div className="filter-options">
                    <div>
                        <p>Status:</p>
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="All">Todas</option>
                            <option value="Completed">Completas</option>
                            <option value="Incomplete">Incompletas</option>
                        </select>
                    </div>
                    <div>
                        <p>Ordem de busca:</p>
                        <button onClick={() => setSort("Alfabetica")}>Alfabetica</button>
                        <button onClick={() => setSort("Normal")}>Normal</button>
                    </div>
                </div>
            </h2>
        </div>
    )
}

export default Filter