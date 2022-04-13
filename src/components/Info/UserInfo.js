import { CardMedia, Typography, Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const UserInfo = (props) => {
  const [avrage, setAvrage] = useState(0);
  const [dadeline, setDadeline] = useState(0);
  const [total, setTotal] = useState(props.data.length);
  useEffect(() => {
    setAvrage(
      props.data.reduce((total, next) => total + next.score, 0) /
        props.data.length
    );
    setDadeline(
      (props.data.filter((s) => {
        return s.madeDadeline;
      }).length /
        props.data.length) *
        100
    );
  }, []);

  const { name, Team, joinedAt, avatar } = props.account.personalDetails;
  return (
    <Grid container spacing={4}>
      <Grid item sm={6} md={4}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            image={avatar}
            height={140}
            alt="user avatar"
          />
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography gutterBottom variant="h5" component="div">
          User Information:
        </Typography>
        <Typography gutterBottom component="div">
          Name is: {name}
        </Typography>
        <Typography gutterBottom component="div">
          Team: {Team}
        </Typography>
        <Typography gutterBottom component="div">
          joined At: {joinedAt}
        </Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography gutterBottom variant="h5" component="div">
          Project Information:
        </Typography>
        <Typography gutterBottom component="div">
          Made Dadeline: {dadeline}
        </Typography>
        <Typography gutterBottom component="div">
          The average score is : {avrage}
        </Typography>
        <Typography gutterBottom component="div">
          Number of projects : {total}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default connect(({ account }) => ({ account }), null)(UserInfo);
