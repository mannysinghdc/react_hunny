import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';
import { useState } from 'react'
// import { RxCross1 } from "react-icons/rx";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

//Cmpt start
const Post = ({ post }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card>
               
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.title}
                    </Typography>
                </CardContent>
                <div className="d-flex justify-content-around" style={{ margin: '0px auto', width: '150px' }}>
                    {
                        post.tags.map((elm, i) => (
                            <div key={i} >
                                <div style={{ width: 50, margin: '0px 5px' }}>
                                    <Badge badgeContent={elm} color="primary">
                                    </Badge>
                                </div>
                            </div>

                        ))
                    }
                </div>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                        {post.reactions.likes}
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                            {post.body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}

export default Post