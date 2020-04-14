import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    // route parameter
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));

    // paramMap
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  backToDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // optional route parameter -> จะส่งค่า Property ไปที่ path ของ component ไหน
    // this.router.navigate(['/departments', { id: selectedId }]);

    //relative navigate
    // '../' go up one level int route path -> ส่ง property id กลับไปขึ้นไปที่ path ก่อนหน้า 1 ชั้น
    //  -> current => /department-list/1 => กลับไป path 1 ขั้น /department-list แล้วส่ง id กลับไปทำให้ path = /department-list;id=1
    // './' get current path
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route })
  }

  // child routes
  showOverview() {
    // เป็นการ navigate ไปที่ current path url 'overview' โดยที่ relative กับ current url (map กับ child route ที่ config ไว้)
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    // เป็นการ navigate ไปที่ current path url 'contact' โดยที่ relative กับ current url (map กับ child route ที่ config ไว้)
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
