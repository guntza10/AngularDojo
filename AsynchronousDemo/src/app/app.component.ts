import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AsynchronousDemo';

  constructor(private http: HttpClient) {

  }

  onObservableLoad() {
    // Observable
    this.http.get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe(result1 => {
        alert(JSON.stringify(result1));
        this.http.get("https://jsonplaceholder.typicode.com/todos/2")
          .subscribe(result2 => {
            alert(JSON.stringify(result2));
            this.http.get("https://jsonplaceholder.typicode.com/todos/3")
              .subscribe(result3 => {
                alert(JSON.stringify(result3));
              });
          });
      });
  }

  onPromiseLoad() {
    //Promise
    this.http.get("https://jsonplaceholder.typicode.com/todos/1")
      .toPromise()
      .then(result => {
        alert(JSON.stringify(result));
      })
      .then(() => {
        alert('2');
      })
      .then(() => {
        alert('3');
      })
      .then(() => {
        alert('4');
      });
  }

  onPromiseMultipleLoad() {
    // PromiseMultiple
    // สร้าง promise object ของแต่ละตัว
    let p1 = this.http.get("https://jsonplaceholder.typicode.com/todos/1").toPromise();
    let p2 = this.http.get("https://jsonplaceholder.typicode.com/todos/2").toPromise();
    let p3 = this.http.get("https://jsonplaceholder.typicode.com/todos/3").toPromise();

    Promise.all([p1, p2, p3]).then(result => {
      // มันทำงานพร้อมกัน ได้ result ออกมาเป็น array
      alert(JSON.stringify(result[0]));
      alert(JSON.stringify(result[1]));
      alert(JSON.stringify(result[2]));
    });
  }

  async onAsyncAwaitLoad() {
    // Promise (Async-Await)
    let result1 = await this.http.get("https://jsonplaceholder.typicode.com/todos/1").toPromise();
    alert(JSON.stringify(result1));

    let result2 = await this.http.get("https://jsonplaceholder.typicode.com/todos/2").toPromise();
    alert(JSON.stringify(result2));

    let result3 = await this.http.get("https://jsonplaceholder.typicode.com/todos/3").toPromise();
    alert(JSON.stringify(result3));
  }

}
