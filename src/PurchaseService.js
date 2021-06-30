import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import { SortableElement } from 'react-sortable-hoc';
import { withRouter } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles/PurchaseServiceStyles';

function PurchaseService(props) {
    const { history, classes, purchase, progressStage, category, services, users } = props;

    let categoryColor = null;
    let progress = 10;
    switch (progressStage) {
        case 0:
            break;
        case 1:
            progress = 25;
            break;
        case 2:
            progress = 75;
            break;
        case 3:
            progress = 100;
            break;
    }

    switch (category) {
        case 'Graphics & Design':
            categoryColor = "#A22E2E";
            break;
        case 'Digital Marketing':
            categoryColor = "#686490";
            break;
        case 'Writing & Translation':
            categoryColor = "#2659A6";
            break;
        case 'Video & Animation':
            categoryColor = "#D1C410";
            break;
        case 'Music & Audio':
            categoryColor = "#13A429";
            break;
        case 'Programming & Tech':
            categoryColor = "#BD7A23"; 
            break;
    }

    let serviceData = null;
    if (services && purchase) {
        serviceData = services.find(service => service.serviceId === purchase.serviceId);
    }

    let sellerData = null;
    if (users && purchase) {
        sellerData = users.find(user => user.userId === purchase.sellerId)
    }

    return (
        <Fragment>
            {serviceData &&
                <div className={classes.container}>
                    <div style={{ backgroundColor: categoryColor }} className={classes.categoryColor}></div>
                    <div className={classes.title}>{serviceData.title}</div>
                    <div className={classes.subcategory}>
                        <div style={{ backgroundColor: categoryColor }} className={classes.tab}>{serviceData.subcategory}</div>
                    </div>
                    <Avatar src={sellerData.photoUrl} className={classes.sellerImage} onClick={() => history.push(`/user-info/${serviceData.sellerId}`)} />
                    <div className={classes.deliveryDate}>{purchase.deliveryDate}</div>
                    <div className={classes.progress}>
                        <CircularProgressbar
                            className={classes.circle}
                            value={progress}
                            text={`${progress}%`}
                            styles={buildStyles({
                                pathColor: "green",
                                textColor: "green",
                                textSize: "25px"
                            })} />
                    </div>
                </div>
            }
        </Fragment>
    );
}

export default SortableElement(withRouter(withStyles(styles)(PurchaseService)));
