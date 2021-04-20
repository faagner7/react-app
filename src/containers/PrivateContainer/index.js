import React, { forwardRef } from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import styles from './styles';

const useStyles = makeStyles(styles);

const PrivateContainer = ({ children, title }) => {
  const classes = useStyles();
  document.title = `${title} - Sistema`;
  // eslint-disable-next-line react/display-name
  const ForwardNavLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <NavLink {...props} />
    </div>
  ));

  const pages = [
    {
      title: "Home",
      href: "/",
      exact: true,
    },
    {
      title: "Clientes",
      href: "/customers",
    },
    {
      title: "Produtos",
      href: "/products",
    },
  ];
  return (
    <>
      <nav className={classes.nav}>
        <List component="div" className={classes.navList}>
          {pages.map((page) => (
            <ListItem
              to={page.href}
              exact={page.exact}
              component={ForwardNavLink}
              key={page.title}
              className={classes.li}
              activeClassName={classes.activeListItem}
            >
              <ListItemText>{page.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </nav>
      <main>{children}</main>
    </>
  );
};

PrivateContainer.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

PrivateContainer.defaultProps = {
  children: <></>,
  title: "",
};

export default PrivateContainer;
