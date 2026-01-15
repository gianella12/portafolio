
export const VerImg = ({ img, onClose }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/80 "
        >
            <div className="relative">
                <img
                    src={img}
                    alt="pokemon seleccionado"
                    className=" h-[420px] object-cover"
                />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 px-2 py-1 rounded bg-gray-400 w-10 h-10 flex items-center"
                >
                   <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-x w-11" viewBox="0 0 16 16">
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>

        </div>
    )
}