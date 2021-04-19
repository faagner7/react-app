import React, { forwardRef } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";
// import history from "../../helpers/history";
import "./index.private.css";

const PrivateContainer = ({ children, title }) => {
  document.title = `${title} - Sistema`;
  // const history = useHistory();

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
      <nav>
        <List component="div" className="navList">
          {pages.map((page) => (
            <ListItem
              to={page.href}
              exact={page.exact}
              component={ForwardNavLink}
              key={page.title}
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
