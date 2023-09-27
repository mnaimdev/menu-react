
const Menu = ({menuItem}) => {
const {id, title, category, desc, img, price} = menuItem;



    return (
        <>

        
        <div className="container">
            <div className="imgContainer">
                <img className="image" src={img} alt={id} />
            </div>
            <div className="textContainer">
                <h3 className="title">{title}</h3>
                <p className="price">${price}</p>
                <p className="desc">{desc}</p>
            </div>

        </div>
        </>
    )
}

export default Menu;