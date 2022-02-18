const Navbar = props => {
    const { items } = props;
    return <>
        <ul>
            {
                items.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </>
}

export default Navbar