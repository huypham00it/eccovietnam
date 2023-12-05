import { CardBody, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

type PropsType = {
    image: string;
};

const BasicProductCart = (props: PropsType) => {
    return (
        <Card className="!tw-border-none hover:tw-shadow-md">
            <CardBody className="!tw-p-2">
                <Link to={`/detail/id-product`} className="tw-no-underline">
                    <div className="tw-aspect-square">
                        <Image
                            alt="product"
                            className="tw-w-full tw-h-full tw-object-cover"
                            src={props.image}
                        />
                    </div>
                    <div className="tw-p-3 tw-text-center tw-text-black tw-no-underline">
                        ECCO TAKEAWAY BAG CROSSBODY
                    </div>
                </Link>
            </CardBody>
        </Card>
    );
};

export default BasicProductCart;
