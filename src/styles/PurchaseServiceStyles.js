import sizes from './sizes';

export default {
    container: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        fontSize: "14px",
        height: "60px",
        borderRadius: "4px",
        backgroundColor: "rgb(240, 240, 240)",
        margin: "0.2rem 0",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "rgb(226, 226, 226)",
        },
        [sizes.down("sm")]: {
            fontSize: "12px",
        },
    },
    categoryColor: {
        width: "0.6%",
        height: "100%",
        borderRadius: "4px 0 0 4px",
        [sizes.down("sm")]: {
            width: "1%",
        },
    },
    title: {
        width: "35%",
        margin: "0 0.5rem",
        [sizes.down("sm")]: {
            width: "50%",
        },
    },
    subcategory: {
        width: "25%"
    },
    tab: {
        borderRadius: "15px",
        color: "white",
        width: "fit-content",
        fontWeight: "300",
        padding: "1px 12px",
        margin: "3px 0px",
        [sizes.down("sm")]: {
            display: "none",
        },
    },
    sellerImage: {
        margin: "0 0.5rem",
        width: "35px",
        height: "35px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    deliveryDate: {
        width: "15%",
        marginLeft: "2rem",
        marginRight: "1rem",
        color: "#727474"
    },
    progress: {
        height: "100%",
        width: "10%",
        marginLeft: "auto",
        display: "flex",
        [sizes.down("sm")]: {
            width: "20%",
        },
    },
    circle: {
        height: "70%",
        marginTop: "auto",
        marginBottom: "auto",
    }
}