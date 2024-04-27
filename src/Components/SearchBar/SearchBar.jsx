// import css from './SearchBar.module.css'
import { MdOutlineImageSearch } from "react-icons/md";

export default function SearchBar ({handleSubmit}) {


    return (
        <header>
            <form onSubmit={handleSubmit}>
                <MdOutlineImageSearch />
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name='searchBar'
                    />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

