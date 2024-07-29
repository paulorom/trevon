import Layout from "./Layout";

export default function PageBuilding({page}) {

    return  (
        <Layout>
            <div className="w-full h- flex justify-center">
                <h1>Olá estamos trabalhando nesta Página de {page}</h1>

            </div>

        </Layout>
    );
}