import React, { Component } from "react";
import ReactDOM from "react-dom";
import robot from "./robot";

class App extends Component {
  state = {
    browserWSEndpoint: "ws://127.0.0.1:4000",
    siteName: "",
    folderName: "",
    copys: "",
    campId: "",
    apiKey: "",
    pixelId: "",
    redirectLink: "",
    quickFill: "",
    url: "",
    campName: "",
    _isMounted: false
  };
  runAuto = async () => {
    const data = {
      siteName: this.state.siteName,
      folderName: this.state.folderName,
      copys: this.state.copys,
      campId: this.state.campId,
      apiKey: this.state.apiKey,
      pixelId: this.state.pixelId,
      redirectLink: this.state.redirectLink,
      quickFill: this.state.quickFill,
      url: this.state.url,
      campName: this.state.campName
    }
    const { browserWSEndpoint } = this.state;
    await robot({
      browserWSEndpoint, data
    });
  };
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidMount(){
    this.setState({
      _isMounted: true
    })
  }
  componentWillUnmount(){
    this.setState({
      _isMounted: false
    })
  }
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col flex justify-content-center">
            <form className="row">
              <div className="form-group">
                Sitename:
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="text"
                  name="siteName"
                  required
                />
                Foldername:
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="text"
                  name="folderName"
                  required
                />
                How many copies?
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="number"
                  name="copys"
                  required
                />
                Campaign ID:
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="text"
                  name="campId"
                  required
                />
                API Key:
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="text"
                  name="apiKey"
                  required
                />
                Pixel ID:
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="text"
                  name="pixelId"
                  required
                />
              </div>
              <div className="form-group ml-5">
                Redirect Link:
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  style={{ width: "200px" }}
                  className="form-control"
                  type="text"
                  name="redirectLink"
                  required
                />
                QuickFill
                <textarea
                onChange={(e) => this.handleInputChange(e)}
                  className="form-control"
                  rows="4"
                  cols="22"
                  name="quickFill"
                  
                />
                URL:
                <textarea
                onChange={(e) => this.handleInputChange(e)}
                  className="form-control"
                  rows="3"
                  cols="22"
                  name="url"
                />
                Campaign name:
                <input
                  onChange={(e) => this.handleInputChange(e)} className="form-control" name="campName" />
              </div>
            </form>
            <button className="btn btn-success mt-3" onClick={this.runAuto}>
              Create FF Campaign
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
