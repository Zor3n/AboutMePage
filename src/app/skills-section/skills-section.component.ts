import { Component, OnInit } from '@angular/core';

import { skills, others } from '../main-skills';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
  skills = skills;
  others = others;
  constructor() { }

  ngOnInit(): void {
  }

}
