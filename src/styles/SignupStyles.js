import sizes from './sizes';

export default {
    root: {
        width: "25%",
        color: "#525252",
        fontWeight: "300",
        boxShadow: " 0px 3px 25px -10px rgba(111,120,111,1)",
        borderRadius: "20px",
        padding: "1.5rem 0",
        margin: "2rem 0",
        [sizes.down("xxxl")]: {
            width: "35%",
        },
        [sizes.down("xxl")]: {
            width: "40%",
        },
        [sizes.down("xl")]: {
            width: "45%",
        },
        [sizes.down("lg")]: {
            width: "50%",
        },
        [sizes.down("md")]: {
            width: "55%",
        },
        [sizes.down("sm")]: {
            width: "90%",
        },
    },
    header: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
        margin: "1rem auto 2rem auto",
        "& div": {
            width: "100%"
        }
    },
    haveAccount: {
        display: "flex",
        justifyContent: "center",
        "& a": {
            textDecoration: "none",
            color: "#328bd4",
            padding: "0 0.5rem",
            "&:hover": {
                textDecoration: "underline"
            }
        },
    },
    image: {
        position: "relative",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            height: "150px",
            width: "150px",
            borderRadius: "50%",     
        }
    },
    avatarImage:{
        width: "150px",
        height: "150px",
    },
    inputImage: {
        width: "0.1px",
        height: "0.1px",
        opacity: "0",
        overflow: "hidden",
        position: "absolute",
        zIndex: "-1"
    },
    inputImageLabel: {
        marginTop: "1.5rem",
        textAlign: "center",
        border: "1px solid #727474",
        fontFamily: "inherit",
        padding: "0.3rem 2rem",
        borderRadius: "5px",
        backgroundColor: "white",
        display: "inline-block",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            border: "1px solid #29bb89",
            color: "#23775a",
            backgroundColor: "rgb(250, 250, 250)"
        },
        "&:focus": {
            outline: "none"
        }
    },
    deleteImageIcon: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        width: "150px",
        borderRadius: "50%",    
        zIndex: "5",
        backgroundColor: "rgb(0,0,0,0.4)",
        transition: "all 0.2s ease-in-out",
        opacity: "0",
        "& svg": {
            transform: "scale(1.5)",
            color: "white"
        },
        "&:hover": {
            opacity: "1",
            cursor: "pointer"
        }
    },
    spinner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto auto",
        "& div":{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem"
        }
    }
}