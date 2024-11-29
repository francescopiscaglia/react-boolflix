import Jumbotron from "../Jumbotron";

export default function HomePage() {

    // logic
    const pageTitle = "Welcome to Boolflix! 👋🏼";
    const pageDescription = "This is a work in progress webApp, stay tuned.. 👀"

    // render
    return (
        <>
            <Jumbotron
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            >
                <p className="card-text">Use the search bar to find a movie or a TV series</p>
            </Jumbotron>
        </>
    );
};