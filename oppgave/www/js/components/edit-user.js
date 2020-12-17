import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`

      <div>
        <li>${this.user.uname}</li>
        <li>${this.user.firstName}</li>
        <li>${this.user.lastName}</li>
      </div>
    
      <form action="/api/updateUser.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="${this.user.firstName}"><br>

        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="${this.user.lastName}"><br><br>

        <input type="submit" value="Submit/edit User">
      </form> 
    `;
  }

}
customElements.define('edit-user', EditUser);
