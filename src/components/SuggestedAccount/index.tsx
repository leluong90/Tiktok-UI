import React, { ReactNode } from "react";
import "./SuggestedAccount.scss";
import SuggestedAccountItem from "./SuggestedAccountItem";
type SuggestedAccountProps = {
  label: string;
};

const SuggestedAccount: React.FC<SuggestedAccountProps> = ({ label }) => {
  return (
    <div className="suggested_account">
      <p className="label">{label}</p>
      <SuggestedAccountItem icon="" title="" />
      <SuggestedAccountItem icon="" title="" />
      <SuggestedAccountItem icon="" title="" />
      

      <p className="more">See all</p>
    </div>
  );
};

export default SuggestedAccount;
