var yo = require('yo-yo')
var landing = require('../landing')

var signin_form = yo`<div class="col s12 m7">
						<div class="row">
							<div class="signup-form">
								<h1 class="platzigram">LitusGram</h1>
							<form class="signup-form">
								<div class="section">
									<a class="btn btn-bf hiden-on-small-only">Iniciar sesión con Facebook</a>
									<a class="btn btn-bf hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>Iniciar sesión</a>
								</div>
								<div class="divider"></div>
								<div class="input-field section">
									<input type="text" name="username" placeholder="Nombre de usuario"/>
									<input type="password" name="password" placeholder="Contraseña"/>
									<button class="btn waves-effect waves-light btn-signup" type="submit">Iniciar</button>
								</div>
							</form>
							</div>
						</div>
							<div class="row">
								<div class="login-box">
									
									¿No tienes una cuenta?<a href="/signup">Regístrate</a>
								</div>
							</div>
						</div>`

module.exports = landing(signin_form)
