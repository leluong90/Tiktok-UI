import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuggestedAccountPreview = () => {
  return (
    <div className="suggested-account-preview">
      <header className="preview-header">
        <img
          className="avatar-preview"
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7c585a9f1ddde751836bfa238e551891~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=30dda6fe&x-expires=1742979600&x-signature=tCRCUmOjVjZXhPCXPeXW06eeUSI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
          alt="avatar"
        />
        <Button>Follow</Button>
      </header>
      <div className="preview-body">
        <p className="preview-body-nickname">
          <strong>nguyenvana</strong>
          <FontAwesomeIcon
            className="check"
            icon={faCheckCircle}
          />
        </p>
        <p className="preview-body-name">Nguyễn Văn A</p>
        <p className="preview-body-analytics">
            <strong className="value">8.2M</strong>
            <span className="followers">Followers</span>
            <strong className="value">8.2M</strong>
            <span className="like">Like</span>
        </p>
      </div>
    </div>
  );
};
export default SuggestedAccountPreview;
