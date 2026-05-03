type LoaderProps = {
    loadingText?: string
}

const Loader = ({ loadingText }: LoaderProps) => {
    return (
        <div className="loader">
            {loadingText && <span className="loader_text">{loadingText}</span>}
            <span className="spinner" />
        </div>
    )
}

export default Loader