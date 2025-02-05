import s from "./ErrorMessage.module.css";

export default function ErrorMessage({errorMessage}) {
    return (
        <p className={s.error}>{errorMessage}</p>
    );
}