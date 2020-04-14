import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  public departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" },
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // route parameter with absolute path
    // this.router.navigate(['/departments', department.id])

    // relative navigate
    // ส่ง route parameter ไปที่ current path ที่ activedRoute 
    // ซึ่งก็คือ /department-list => /department-list/department.id จะ match กับ route param ที่เรา config ไว้
    this.router.navigate([department.id], {relativeTo : this.route});
  }

  isSelected(department) {
    // ==, === แตกต่างกันตรงที่ อันแรกจะ convert ให้เป็น type เดียวกันก่อน compare แต่อันที่ 2 คือ compare เลย ทำให้แบบที่ 2 มัน strong compare กว่าแบบแรก 
    // เพราะมันต้องเป็น type เดียวกันเท่านั้นถึงจะ compare กันได้
    return department.id === this.selectedId;
  }

}
