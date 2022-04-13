import React, { useState } from "react";
import { connect } from "react-redux";
import history from "../../config/history";
import { FetchData } from "../../redux/actions/accountProjects";
import Loading from "../Loading/LoadingImage";
import TableStruct from "./TableStruct";
import UserInfo from "./UserInfo";

const Info = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  React.useEffect(() => {
    const { token } = props.account;
    if (!token) return history.push("/");

    async function fetchData() {
      return await props.FetchData({ token });
    }
    fetchData()
      .then(({ resMessage }) => {
        if (resMessage !== "success")
          setError("Failed to fetch data, try again.");
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data, try again.");
      });
  }, []);

  const RenderTable = () => {
    return error ? (
      <div className="center-div">{error}</div>
    ) : (
      <>
        <UserInfo data={props.accountProjects.projects} />
        <TableStruct data={props.accountProjects.projects} />
      </>
    );
  };
  return (
    <div style={{ height: 700, width: "100%" }}>
      {isLoading ? <Loading /> : <RenderTable />}
    </div>
  );
};

const mapStateToProps = (state) => {
  const account = state.account;
  const accountProjects = state.accountProjects;
  return { accountProjects, account };
};

export default connect(mapStateToProps, { FetchData })(Info);
