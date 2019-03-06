import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
  <h2>Simple reactive control</h2>
  <app-name-editor></app-name-editor>
  <hr>
  <h3>Reactive from useing a form Group</h3>
  <app-grouped-form-ctl></app-grouped-form-ctl>
  
  <<hr>
  <h3> Using Formbuilder</h3>
  <app-form-build-example></app-form-build-example>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExReactive';


}
