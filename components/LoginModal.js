import React from "react";
import { withTranslation } from "react-i18next";
import Modal from "react-modal";
import Login from "./Login";
import Register from "./Register";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false,
    };
  }

  switchToRegister() {
    this.setState({ showRegister: true });
  }

  switchToLogin() {
    this.setState({ showRegister: false });
  }

  render() {
    const { isOpen, onLoginSuccess, onCloseRequest } = this.props;
    const { showRegister } = this.state;

    return (
      <Modal isOpen={isOpen} className="modal" onRequestClose={onCloseRequest}>
        <div className="modal__header">
          {this.props.t(showRegister ? "register.title" : "login.title")}
        </div>
        <div className="modal__body">
          {showRegister ? (
            <Register
              onLogin={this.switchToLogin.bind(this)}
              onRegisterSuccess={(user) => onLoginSuccess(user)}
            />
          ) : (
            <Login
              onLoginSuccess={(user) => onLoginSuccess(user)}
              onCreateAccount={this.switchToRegister.bind(this)}
            />
          )}
        </div>
      </Modal>
    );
  }
}

export default withTranslation()(LoginModal);
