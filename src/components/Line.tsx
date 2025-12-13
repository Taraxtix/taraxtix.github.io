function Line() {
    return (
        <hr style={hrStyle}/>
    )
}

const color = 'white'
const widthPercentage = 100
const marginVertical = '2rem'

const hrStyle = {
    backgroundColor: color,
    height: '0.05rem',
    width: widthPercentage + '%',
    marginLeft: widthPercentage > 100 ?
        '-' + (widthPercentage - 100) / 2 + '%'
        : 50 - widthPercentage / 2 + '%',
    marginBottom: marginVertical,
    marginTop: marginVertical,
}

export default Line