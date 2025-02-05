import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css'

export default function ImageGallery({ images, onClick }) {
    return (
        <ul className={s.gallery}>
            {images.map((image, index) => (
                <li
                    key={image.id}
                    onClick={() => onClick(image, index)}
                    className={s.item}
                >
                    <ImageCard data={image} />
                </li>
            ))}
        </ul>
    );
}