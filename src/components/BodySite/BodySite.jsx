import "./BodySite.css";

const itemsInfo = [
    {
        name: 'Water and sunrise',
        img: "http://placehold.it/300x300",
        size: '2 332 KB',
        category: 'nature',
        dimensions_pic: '4528 x 3200',
        id: 1
    },
    {
        name: 'Water and tree',
        img: "http://placehold.it/300x300",
        size: '2 332 KB',
        category: 'nature',
        dimensions_pic: '4028 x 2264',
        id: 2
    },
    {
        name: 'Water and mountains',
        img: "http://placehold.it/300x300",
        size: '2 332 KB',
        category: 'nature',
        dimensions_pic: '4928 x 3294',
        id: 3
    },
    {
        name: 'Water and mountains',
        img: "http://placehold.it/300x300",
        size: '2 332 KB',
        category: 'nature',
        dimensions_pic: '4928 x 3294',
        id: 4
    }
]

export function BodySite() {
    return (
        <div className="container">
            <div className="navigation">
                <ul>
                    <li>Flower</li>
                    <li>Nature</li>
                    <li>Cozy work</li>
                </ul>
            </div>
            <div className="description">
                {
                    itemsInfo.map((item) => {
                        return (
                                <div className="item-description" key={item.id}>
                                <h2>{item.name}</h2>
                                    <img className="item-img" src={item.img} alt="img"/>
                                <p>Size: {item.size}</p>
                                <p>Category: {item.category}</p>
                                <p>Dimension: {item.dimensions_pic}</p>
                                <button className="button-description">Download</button>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}