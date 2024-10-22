import "./Travels.scss"
import travelsData from "./travels-data"


const Travels = () => {
  return (
    <div className="travels">
        <div className="container">
        <h2 className="travels__title">Our travels</h2>
            <div className="travels__inner">
                {travelsData.map(travdata => 
                    <div className="travels__item" key={travdata.id}>
                        <a href="#" className="travels__link">
                            <img src={travdata.img} alt="" className="travels__item-img" />
                            <h2 className="travels__item-title">{travdata.title}</h2>
                            <p className="travels__item-text">{travdata.text}</p>
                        </a>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Travels
