import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, NotificationsOutlined as Reminder,ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const NavList = () => {

    const navList = [
        { id: 1, name: 'Заметки', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Напоминания', icon: <Reminder/>, route: '/reminders' },
        { id: 3, name: 'Архив', icon: <Archive />, route: '/archive' },
        { id: 4, name: 'Корзина', icon: <Delete />, route: '/trash' },
    ]
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;