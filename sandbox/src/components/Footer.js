function Footer() {

    const date = new Date();

    return (
        <div className="fixed-bottom">
            Crée par Aurelien Fillion en {date.toLocaleDateString()}
        </div>
    );
}

export default Footer;