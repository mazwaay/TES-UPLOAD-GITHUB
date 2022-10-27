class homeSaucePage {
    elements = {
      usernameInput: () => cy.get("#user_login"),
      passwordInput: () => cy.get("#user_password"),
      loginBtn: () => cy.get("button[type=submit]"),
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }
  }
  
  module.exports = new homeSaucePage();
  