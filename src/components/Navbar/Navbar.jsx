const Navbar = props => {
    const { items } = props;
    return <>
        <ul>
            {
                items.map((item, i) => {
                    return <li key={i}>{item}</li>
                })
            }
        </ul>
    </>
}

export default Navbar