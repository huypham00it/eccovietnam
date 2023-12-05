import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const params = useParams();

    return (
        <main className="tw-min-h-screen tw-flex tw-items-center tw-justify-center">
            CetegoryPage: {params.id}
        </main>
    );
};

export default CategoryPage;
