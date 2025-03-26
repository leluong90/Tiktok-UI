import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import "./SuggestedAccountItem.scss";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "../../Popper/PopperWrapper";
import SuggestedAccountPreview from "./SuggestedAccountPreview";
type SuggestedAccountItemProps = {
  icon: ReactNode;
  title: string;
  check?: ReactNode;
};

const SuggestedAccountItem: React.FC<SuggestedAccountItemProps> = ({}) => {
  const renderPreview = (atts: any) => (
    <div className="tooltip-preview" tabIndex={-1} {...atts}>
      <PopperWrapper>
        <SuggestedAccountPreview />
      </PopperWrapper>
    </div>
  );
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-50,0]}
        placement="bottom"
        appendTo={document.body}
        render={renderPreview}
      >
        <div className="suggest-account-item">
          <img
            className="avatar"
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7c585a9f1ddde751836bfa238e551891~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=30dda6fe&x-expires=1742979600&x-signature=tCRCUmOjVjZXhPCXPeXW06eeUSI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
            alt="ảnh"
          />
          <div className="item-info">
            <h4 className="nickname">
              <strong>nguyenvana</strong>
              <FontAwesomeIcon className="check" icon={faCheckCircle} />
            </h4>
            <p className="name">nguyễn văn a</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
};
export default SuggestedAccountItem;
