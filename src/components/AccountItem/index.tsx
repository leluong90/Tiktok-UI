import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AccountItem.scss";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";

type UserProps = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  nickname: string;
  avatar: string;
  bio: string;
  tick: boolean;
  followings_count: number;
  followers_count: number;
  likes_count: number;
  website_url?: string;
  facebook_url?: string;
  youtube_url?: string;
  twitter_url?: string;
  instagram_url?: string;
  created_at: string;
  updated_at: string;
};

type AccountItemProps = {
  data: UserProps;
};
const AccountItem: React.FC<AccountItemProps> = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className="wrapper-account">
      <Image className="avatar" src={data.avatar} alt={data.full_name} />
      <div className="info">
        <h4 className="name">
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className="check" icon={faCheckCircle} />
          )}
        </h4>
        <span className="username">{data.nickname}</span>
      </div>
    </Link>
  );
};
export type { UserProps };
export default AccountItem;
