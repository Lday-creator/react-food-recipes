import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='cyan darken-3 white-text'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    React Food Recipes
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
