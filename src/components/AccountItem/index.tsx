import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AccountItem.scss"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
    return ( <div className="wrapper-account">

        <img className="avatar" src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f8bf143e93d27567bb9d37fa5c018682~c5_300x300.webp?lk3s=a5d48078&nonce=86573&refresh_token=cea7c03bb357ff03531a932cf30c6199&x-expires=1739516400&x-signature=e6YIF7jsiiOIEl3bQ9MUUCU8FSg%3D&shp=a5d48078&shcp=c1333099" alt="Hoa" />
        <div className="info">
            <h4 className="name">
                <span>Nguyen Văn A</span>
                <FontAwesomeIcon className="check" icon={faCheckCircle}/>
            </h4>
            <span className="username">nguyenvana</span>
        </div>
    </div> );
}

export default AccountItem;
