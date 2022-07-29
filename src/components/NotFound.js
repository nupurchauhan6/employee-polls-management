const NotFound = () => {

    const styles = {
        wrapper: {
            height: '80vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
    return (
        <div style={styles.wrapper}>
            <h2>404. This page could not be found.</h2>
        </div>
    );
}

export default NotFound;