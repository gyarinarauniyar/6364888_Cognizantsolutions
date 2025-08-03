import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const userData = data.results[0];

      this.setState({
        user: {
          title: userData.name.title,
          firstName: userData.name.first,
          picture: userData.picture.large,
        },
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <h2 style={{ textAlign: "center" }}>Loading user data...</h2>;
    }

    if (!user) {
      return <h2 style={{ textAlign: "center", color: "red" }}>No user found</h2>;
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h2 style={{ color: "green" }}>Fetched User Details</h2>
        <p>
          <strong>Title:</strong> {user.title}
        </p>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <img
          src={user.picture}
          alt="User"
          style={{ borderRadius: "50%", marginTop: "10px" }}
        />
      </div>
    );
  }
}

export default Getuser;
