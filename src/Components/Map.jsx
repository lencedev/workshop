export const Map = () => {
    return (
        <div className="map">
            <h2>
                Nous trouver
            </h2>
            <div style={{ width: '100%' }}>
                <iframe
                    style={{ borderRadius: '20px' }} // Ajout du border-radius ici
                    width="40%"
                    height="600"
                    frameborder="0" // Assurez-vous de mettre "0" ici
                    scrolling="no"
                    marginHeight="100" // Modifié pour respecter la syntaxe camelCase de React
                    marginWidth="0" // Modifié pour respecter la syntaxe camelCase de React
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Place%20de%20la%20com%C3%A9die%20Montpellier+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/population/">Population calculator map</a>
                </iframe>
            </div>
        </div>
    );
}
