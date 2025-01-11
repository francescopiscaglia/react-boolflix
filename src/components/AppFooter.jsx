export default function AppFooter() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container d-flex justify-content-center align-items-center">
                <p style={{ fontSize: '12px' }}>&copy; {currentYear} Bool Movies. All rights reserved.</p>
            </div>
        </footer>
    );
};