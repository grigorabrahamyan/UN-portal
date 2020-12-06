import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, Logo, AddressIcon, LinkdinIcon, FloopenIcon, FbIcon } from 'components/Icons';
import UN_emblem from 'assets/img/UN_emblem.png';
import title from 'assets/img/title.png';

const arr = ['Կայքի քարտեզ', 'Հղումներ', 'Հետադարձ կապ', 'Հետևեք մեզ ֆեյսբուքում'];
function Footer() {
  return (
    <div className="footer-contaent">
      <div className="footer__up wrapper__container">
        <div className="footer__up-wrapper all__container">
          <div className="footer__up-info">
            <div className="footer__up-logoWrapper">
              <Logo />
            </div>
            <div className="footer__up-infoWrapper">
              <div className="footer__up-infoAdress">
                <div className="footer__up-adressIcon">
                  <AddressIcon className='footer__up-adressIconImg' />
                </div>
                <div className="footer__up-adressText">
                  <span>Հայաստանի Հանրապետություն, ք․ Երևան, Նալբանդյան 29</span>
                </div>
              </div>
              <div className="footer__up-infoPhone">
                <div className="footer__up-phoneIcon">
                  <PhoneIcon className='footer__up-phoneIconImg' />
                </div>
                <div className="footer__up-phoneText">
                  <span>+374 11 22 33</span>
                </div>
              </div>
            </div>
            <div className="footer__up-socialIcons">
              <div className="footer__up-icon">
               <FbIcon />
              </div>
              <div className="footer__up-icon">
                <LinkdinIcon />
              </div>
            </div>
          </div>
          <div className="footer__up-menus">
            <div className="footer__up-menusWrapper">
              <div className="footer__up-menusList">
                <ul>
                  {arr.map((item) => {
                    return (
                      <li key={item}>
                        <Link to="/">
                          <span>{item}</span>
                        </Link>
                      </li>
                    );
                  })}
                  <Link to="/">
                    <div className="footer__up__down-arrow arrow__component">
                      <div className="arrow__component-body">
                        <span>Հանգանակե’ք</span>
                      </div>
                    </div>
                  </Link>
                </ul>
              </div>
              <div className="footer__up-logosWrapper">
                <div className="footer__up-logos">
                  <div className="footer__up-infoText">
                    <span>Կայքը պատրաստվել է ՊՀԾ-ի աջակցությամբ</span>
                  </div>
                  <div className="footer__up-logoOne">
                    <img src={UN_emblem} alt="" />
                  </div>
                  <div className="footer__up-logoTwo">
                    <img src={title} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__down wrapper__container">
        <div className="footer__down-wrapper all__container">
          <div className="footer__down-info">
            <span>© NSHO Հիմնադրամ</span>
          </div>
          <div className="footer__down-logo">
            <FloopenIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
