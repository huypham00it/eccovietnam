import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const params = useParams();

    return (
        <main className="tw-min-h-screen tw-flex tw-items-center tw-justify-center">
            Detail page: {params.id}
        </main>
    );
};

export default DetailPage;
