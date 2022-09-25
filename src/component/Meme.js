export default function Meme() {
    return (
        <div className="main">
           <form className="form-control">
                <input placeholder="top text" className="form-input" type="text"/>
                <input placeholder="bottom text" className="form-input" type="text"/>
                <button className="form-button">Generate Random Meme</button>
           </form>
        </div>
    )
}