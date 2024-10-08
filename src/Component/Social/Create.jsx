import { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import { MediaContext } from "../../../store/Media-Item"
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [age, setAge] = useState("");     // this age and file upload state are not use here 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [like, setLike] = useState("")
    const [userId, setUserId] = useState("")
    const navigate = useNavigate()

    const { getDataPost } = useContext(MediaContext)            //Context API


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const categories = ["science", "sports", "business", "politics", "entertainment", "technology", "world", "all"]


    // post method  it is used to send data by form to server
    const addPostHandler = () => {
        // console.log({ userId,title, description, like, tags: tags.split(" ").filter((word) => word !== "") })
        if (!userId || !title || !description || !like || !tags) {
            alert("Please fiill all details")
        } else {
            try {
                fetch('https://dummyjson.com/posts/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId: userId,
                        title: title,
                        body: description,
                        reactions: { likes: like },
                        tags: tags.split(" ").filter((word) => word !== "")
                    })
                })
                    .then(res => res.json())
                    .then(post => getDataPost(post))
                alert("New user created")
                navigate('/media/post')
            } catch (error) {
                throw error
            }
        }
    }

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center mb-3">Create Post</h2>
                <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
                    <Box sx={{ padding: 5 }}>
                        <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                            Social Media
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    UserId
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="userid"
                                    name="UserId"
                                    label="UserId"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Title
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    label="Title"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Content
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Content"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    TAGS
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="tags"
                                    name="tags"
                                    label="tags"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Category
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        {categories.map((item, i) => (
                                            <MenuItem key={i} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    LIKES
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="author"
                                    name="author"
                                    label="Author"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    value={like}
                                    onChange={(e) => setLike(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Img Upload
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button>
                                    <UploadFileIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} />
                            <Grid item xs={12} sm={5} />
                            <Grid item xs={12} sm={4}>
                                <Button variant="contained" size="small" color="info" onClick={addPostHandler}>
                                    Save
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={5} />
                        </Grid>
                    </Box>
                </Paper>
            </div>
        </>
    );
}

export default Create

