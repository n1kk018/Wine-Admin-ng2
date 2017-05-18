import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ckeditor-component',
  templateUrl: './ckeditor.html',
  styleUrls: ['./ckeditor.scss']
})

export class Ckeditor {
  // TODO html should be extracted and put in another file
  public ckeditorContent:string = `<p>Bonjour, <p/>
        <p>
            Vous avez effectué une commande d'un montant de <b><span> XXX euros </span></b> sur <b>WineMania</b> le
            XX/XX/XXXX</span>.
        </p>
        <p>Si vous souhaitez accéder à notre site, veuillez : <a href="http://localhost:8082/Wine-Web/index.jsf">cliquer ici</a>.
        <p>Nos équipes font tout leur possible pour préparer votre commande.</p>

        <p>Vous serez averti par e-mail lors de l'envoi du colis par notre service de transport.<p>

        <fieldset>
        	<legend>Liste des articles commandés</legend>
        	<ul th:remove="all-but-first">

        	</ul>
        </fieldset>
        <p>
            À très bientôt, <br />
            &emsp; <em>L'équipe WineMania</em>
        </p>`;
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
