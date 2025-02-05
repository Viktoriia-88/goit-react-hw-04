import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
    return (
        <div>
            <button className={s.btnLoadMore} onClick={onClick}>
                Load more
            </button>
        </div>
    );
}