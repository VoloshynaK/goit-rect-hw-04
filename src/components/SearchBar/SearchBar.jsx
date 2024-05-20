import css from './SearchBar.module.css'
import { MdOutlineImageSearch } from "react-icons/md";
import toast from 'react-hot-toast';

const notify = () => toast.error('Please, enter the keyword!', {
    style: {
      border: '1px solid #000000',
      padding: '16px',
      color: '#000000',
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#f5f5f5',
    },
  });

export default function SearchBar ({handleSearch}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.elements.searchBar.value;
        
        
        if(value.trim() === "") {
            notify();
            return;
        }
        handleSearch(value);
        form.reset();
    }
    

    return (
        <header className={css.searchBar}>
            <form onSubmit={handleSubmit} className={css.form}>
                <MdOutlineImageSearch className={css.searchIcon}/>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name='searchBar'
                    className={css.searchInput}
                    />
                <button type="submit" className={css.searchBtn}>Search</button>
            </form>
        </header>
    )
}

