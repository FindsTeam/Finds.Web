/* @flow */
import React from 'react';
import cc from 'classcat';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';
import { IntroducingPanel } from '../../components';
import {
  misc,
  freebee,
} from '../../themes/images';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
};

const IndexPage = ({ classes }: Props) => (
  <div className={classes.sky}>
    <div className={classes.sign}>
      <div className={classes.grass}>
        <div className={classes.grassBack} />
        <div className={classes.grassMiddle} />
        <div className={classes.grassFront} />
        <div className={classes.pillar}>
          <div className={classes.pillarShadow} />
          <div className={classes.pillarBase} />
          <div className={classes.pillarHead} />
          <div className={classes.pillarSphere} />
        </div>

        <div className={classes.plates}>
          <div className={classes.plateTop}>
            <div className={cc(classes.plateInner, classes.red)}>
              <div className={classes.nail1} />
              <a href="http://cyclowiki.org/wiki/%D0%A5%D0%B0%D0%BB%D1%8F%D0%B2%D0%B0">
                <img
                  className={cc(classes.plateImage, classes.freebee)}
                  alt="freebee cyclowiki"
                  src={freebee}
                />
              </a>
            </div>
          </div>
          <div className={classes.plateBottom}>
            <div className={cc(classes.plateInner, classes.yellow)}>
              <h3 className={classes.mapRedirect}>
                <Link
                  className={classes.mapRedirectLink}
                  to="/map"
                >
                  {'Карта'}
                </Link>
              </h3>
              <Link to="/map">
                <img
                  alt="map marker"
                  className={cc(classes.plateImage, classes.misc)}
                  src={misc}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <IntroducingPanel />
  </div>
);

export default withStyles(styles)(IndexPage);
