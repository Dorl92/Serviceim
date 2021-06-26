import React, { Fragment, useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/AutoCompleteSearchStyles';
import Slider from "react-slick";
import SearchBar from './SearchBar.js'
import img1 from './images/homepageImage_1.jpg';
import img2 from './images/homepageImage_2.jpg';
import img3 from './images/homepageImage_3.jpg';


function AutocompleteSearch(props) {
    const { classes, history, searchData, serviceTypeData } = props;

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <Fragment>
            <div className={classes.searchContainer}>
                <div className={classes.searchTitle}>Find a Service that fit your needs</div>
                <SearchBar searchData={searchData} />
                <div className={classes.popularTabs}>
                    <span>Popular:</span>
                    {serviceTypeData.map((service, i) => {
                        if (i < 3) return <div className={classes.tab} onClick={()=> history.push(`/services/${service.toLowerCase().replace(/ /i, '-')}`)}>{service}</div>
                    }
                    )}
                </div>
            </div>
            <div className={classes.carousel}>
                <Slider {...settings}>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                </Slider>
            </div>
        </Fragment>
    );
}

export default withRouter(withStyles(styles)(AutocompleteSearch));
