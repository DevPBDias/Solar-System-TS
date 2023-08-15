import './Header.css'

type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header>
            <img src={title} alt='logo' className="solarTitle" />
        </header>
    )
}

export default Header;