import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

export default function MenuItems() {
    const classes = useStyles();
    const items = [
      {
        link: "/dashboard/foodmenu",
        label: "Patiekalai",
        icon: <RestaurantMenuIcon />
      },
      {
        link: "/dashboard/orders",
        label: "Užsakymai",
        icon: <ShoppingCartIcon />
      },
      {
        link: "/dashboard/staff",
        label: "Personalas",
        icon: <SupervisedUserCircleIcon />
      },
      {
        link: "/dashboard/clients",
        label: "Klientai",
        icon: <PeopleIcon />
      },
      {
        link: "/dashboard/suppliers",
        label: "Tiekėjai",
        icon: <LocalShippingIcon />
      }
    ];
    return (
        <div>
          {items.map((item, i) => (
            <NavLink to={item.link} className={classes.link} activeClassName={classes.active} key={i}>
                <ListItem button>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItem>
            </NavLink>
          ))}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: "none",
        color: 'rgb(0, 0, 0, 0.85)'
    },
    active: {
      backgroundColor: 'rgb(0, 0, 0, 0.45)'
    }
}));
