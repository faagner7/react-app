import React, { forwardRef } from "react";
import { List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from "prop-types";
import { NavLink, useHistory } from 'react-router-dom';
// import history from '../../helpers/history';
import "./index.private.css";

const ForwardNavLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <NavLink {...props} />
  </div>
));

ForwardNavLink.displayName = "";

const PrivateContainer = ({ children, title }) => {
  document.title = `${title} - Sistema`;
  const history = useHistory();

  const pages = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Clientes',
      href: '/customers'
    },
    {
      title: 'Produtos',
      href: '/products'
    }
  ]
  return (
    <>
      <nav>
        <List component="div" className="navList">
          {pages.map((page) => (
            <ListItem
              onClick={() => history.push(page.href)}
              key={page.href}
            >
              <ListItemText>
                {page.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </nav>
      <main>
        {children}
      </main>
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
