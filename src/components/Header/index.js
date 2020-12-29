import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Icon, Image, Menu } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { contactsDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };
  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        TrulyContacts
      </Menu.Item>

      {pathname === "/" && (
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" primary basic icon>
            <Icon name="add"></Icon>
            Create Contact
          </Button>
        </Menu.Item>
      )}

      {pathname === "/" && (
        <Menu.Item>
          {""}
          <Button onClick={handleUserLogout} color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
