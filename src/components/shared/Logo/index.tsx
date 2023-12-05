import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"} className="tw-block">
            <Image
                width={110}
                height={30}
                src="https://theme.hstatic.net/1000143422/1001173943/14/logo.png?v=51"
                alt="logo"
            />
        </Link>
    );
};

export default Logo;
