import React from "react";

import "./MyForms.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <form
          className="forms"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xbjpaldd"
          method="POST"
          style={{position: "absolute", left: "17.5%", top: "2%"}}
        >
          <input className="formsInputEmail" type="email" name="email"/>
          <textarea className="formsInputText" type="text" name="message"/>
          <div className="formsButtonsWrapper">
            <button className="formsButton">Enviar</button>
            <a className="formsLinkedinButton" href="https://www.linkedin.com/in/%C3%ADtalo-carvalho-994687155/"><i className="fa fa-linkedin-square" /></a>
            {status === "SUCCESS" && <p className="formsStatusSuccess">Sua mensagem foi enviada com sucesso!<br/>Obrigado por entrar em contato!<br/> Te vejo em breve!</p>}
            {status === "ERROR" && <p className="formsStatusFail">Seu Email não foi enviado!<br/>Por favor, tente novamente <br/>ou me chame pelo Linkdin!</p>}
          </div> 
        </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
};