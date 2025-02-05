import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={s.loader}>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}