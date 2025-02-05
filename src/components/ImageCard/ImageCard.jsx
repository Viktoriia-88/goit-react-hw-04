import s from "./ImageCard.module.css";

export default function ImageCard({ data }) {
    return (
        <div>
            <img src={data.urls.small} alt={data.description} className={s.img} />
        </div>
    );
}