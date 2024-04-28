import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn ({handleLoadMore}) {
    return (
        <div className={css.loadBtnBox}>
            <button type="button" className={css.loadBtn} onClick={handleLoadMore}>Load More</button>
        </div>
    )
}