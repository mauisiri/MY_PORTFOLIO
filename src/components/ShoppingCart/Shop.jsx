export default function Shop({ children }) {
    return(
        <section id='shop'>
            <h2>Title</h2>
                
            <ul id='products'>{children}</ul>
        </section>
    )
}