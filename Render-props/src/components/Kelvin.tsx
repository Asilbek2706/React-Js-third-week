function Kelvin({ value = 0 }) {
    return <div className='temp'>{value + 273.15}K</div>
}

export default Kelvin;