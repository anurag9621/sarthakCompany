const Cart = (props) => {
    return (
        <>
            <div className="block_cart_outer">
                <div className="cart_image_block">
                    <img src={props.image} alt="" />
                </div>

                <div className="cart_content_block">
                    <a href="{props.link}">
                        <h3>{props.heading}</h3>
                    </a>
                    <p>{props.context}</p>
                </div>
            </div>
        </>
    )
}
export default Cart;