import "../styles/loading.css"

function Loading({ texto }) {
    return (
        <div className="d-flex align-items-center snipper">
            <strong className="textoSpinner">{texto}</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    );
}

export default Loading;