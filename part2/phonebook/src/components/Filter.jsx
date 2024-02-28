const Filter = (props) => {
    const {handleFilter, filter, setFilter} = props

    return (
        <div>
          <form onSubmit={handleFilter}>
            <label htmlFor="filter">Filter shown with</label>
            <input  name="filter"
                    value={filter}
                    onChange={e => {
                      setFilter(e.target.value)
            }}/>
            <button type="submit">Filter</button>
          </form>
        </div>
    )
}

export default Filter;