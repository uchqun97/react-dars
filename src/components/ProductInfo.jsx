const ProductInfo = () => {
    const noutbuk  = {
        nomi:"MSI",
        narxi: 1200,
        savdodaMavjudmi: "Savdoda"
    }
    return (
        <div>
            <h1>Maxsulot haqida</h1>
            <h2>Maxsulot nomi: {noutbuk.nomi}</h2>
            <h2>Maxsulot narxi: {noutbuk.narxi}</h2>
            <h2>Maxsulot savdoda mavjudmi: {noutbuk.savdodaMavjudmi}</h2>

        </div>
    )
}
export default ProductInfo
