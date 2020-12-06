import React from 'react';
import { NavbarBrand, NavItem, Navbar, Nav, Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PhoneIcon, Logo, FbIcon, LinkdinIcon } from 'components/Icons';
import Slider from '../components/slider';

const menuArr = [
  {
    menu: 'Ծրագրի մասին',
    arr: [{ name: 'Նպատակ' }, { name: 'Նկարագիր' }, { name: 'Պարտականություններ' }, { name: 'Հաշհվետվություն' }, { name: 'Հղումներ' }],
  },
  {
    menu: 'Նվիրաբերե’ք հիմա',
    arr: [{ name: 'Նպատակ' }, { name: 'Նկարագիր' }, { name: 'Պարտականություններ' }, { name: 'Հաշհվետվություն' }, { name: 'Հղումներ' }],
  },
  {
    menu: 'Միացե’ք մեզ',
    arr: [
      { name: 'Նպատակ', link: '/sale' },
      { name: 'Նկարագիր', link: '/donate' },
      { name: 'Պարտականություններ', link: '/donors' },
      { name: '1', link: '/organized-actions' },
      { name: '3', link: '/goal' },
      { name: '4', link: '/description' },
      { name: '5', link: '/social_workers' },
      { name: '6', link: '/links' },
      { name: '7', link: '/partners' },
      { name: '8', link: '/testimonials' },
      { name: '9', link: '/volunteer' },
      { name: '10', link: '/upcoming-news' },
      { name: '11', link: '/upcoming-akcia' },
      { name: '12', link: '/reserved-points' }
    ],
  },
  {
    menu: 'Նորություններ',
    arr: [],
  },
];

function Header() {
  return (
    <>
      <div className="header-content">
        <div className="header__up wrapper__container">
          <div className="header__up-container all__container">
            <div className="header__up-wrapper">
              <div className="header__up-phoneIcon">
                <PhoneIcon />
              </div>
              <div className="header__up-phone">
                <span>+374 11 22 33</span>
              </div>
              <div className="header__up-fbIcon">
                <FbIcon color="red" className="header__up-FBimg" />
              </div>
              <div className="header__up-linkedinIcon">
                <LinkdinIcon color="red" className="header__up-linkedinIconImg" />
              </div>
            </div>
          </div>
        </div>
        <header>
          <Navbar color="white" light expand="md" className="shadow-sm headder__down-menus">
            <Container>
              <NavbarBrand to={`/`} tag={Link}>
                <Logo />
              </NavbarBrand>
              <Nav navbar className="header-cart-nav flex-row">
                {menuArr.map((item) => {
                  return (
                    <NavItem>
                      <NavLink exact className="nav-link headder__down-menu" to={`/`}>
                        {item.menu}
                        {item?.arr?.length ? (
                          <div className="footer__up-dropdown dropdown">
                            <div className="dropdown__line"></div>
                            <div className="dropdown__wrapper">
                              <Nav>
                                {item.arr.map((item) => {
                                  return (
                                    <Link to={item.link}>
                                      <NavItem key={item.name}>
                                        <span>{item.name}</span>
                                      </NavItem>
                                    </Link>
                                  );
                                })}
                              </Nav>
                            </div>
                          </div>
                        ) : null}
                      </NavLink>

                    </NavItem>
                  );
                })}
                <NavItem>
                  <NavLink className="nav-link" to={`/contacts`}>
                    <div className="headder__down-arrow arrow__component">
                      <div className="arrow__component-body">
                        <span>Նվիրաբերել</span>
                      </div>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </div>
      <Slider />
    </>
  );
}

export default Header;
