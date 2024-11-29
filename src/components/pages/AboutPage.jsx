import Jumbotron from "../Jumbotron.jsx"

export default function AboutPage() {

    // logic
    const pageTitle = "About me"
    const pageDescription = "Hi! 👋🏼 My name is Francesco Piscaglia, I'm a 24 years old student from Italy. I'm currently studying Web Delevopment at Boolean Careers, a coding school based in Milan, Italy. I'm a passionate developer, I love to learn new technologies and to apply them to real world projects. I'm also a big fan of music, I play the guitar and the piano. I'm a big fan of music, I love to listen to it and to discover new artists. I'm also a big fan of sports, I play football and I love to watch Formula 1 races.";

    // render
    return (
        <>
            <Jumbotron
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            >
                <p className="card-text">Use the search bar to find a movie or a TV series or click on the logo to go back to Home</p>
                <p className="card-text">This is a work in progress webApp, stay tuned.. 👀</p>
            </Jumbotron>
        </>
    );
};