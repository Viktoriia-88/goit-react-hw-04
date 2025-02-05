import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const imageName = form.elements.imageName.value.trim();
        if (imageName === "") {
            toast.error('Enter a word to search for!', {
                duration: 4000,
                position: "top-right",
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#ffffff',
                    background: '#fe6161',
                },
            });
            return;
        }
        onSearch(imageName);
        form.reset();
    }
        
    return (
        <header className={s.header}>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    name="imageName"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={s.input}
                />
                <button type="submit" className={s.btn}>Search</button>
            </form>
            <Toaster />
        </header>
    );
}