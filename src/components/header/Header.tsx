
type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header>
            <img src={title} alt='logo' />
        </header>
    )
}

export default Header;