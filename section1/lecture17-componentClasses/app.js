let cards = data.map((cardData, i) => {
    return(<Card key={i} data={cardData}/>)
})
console.log(cards);
ReactDOM.render(
    <div className="row">
        {cards}
    </div>, 
    document.getElementById('root')
)