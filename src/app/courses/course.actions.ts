import { Update } from '@ngrx/entity';
import { Action, createAction, props } from '@ngrx/store';
import { Course } from './model/course';


export const loadAllCourses = createAction(
  "[Course Resolver] Load Courses"
);

export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All Courses Loaded",
  props<{courses: Course[]}>()
);

export const courseUpdated = createAction(
  "[Edit Course Dialog] Course Updated",
  props<{update: Update<Course>}>()
);

// export enum CourseActionTypes {
//   LoadCourses = '[Course] Load Courses',
//   AllCoursesLoaded = '[Load Courses Effect] All Courses Loaded'
// }

// export class LoadCourses implements Action {
//   readonly type = CourseActionTypes.LoadCourses;
// }

// export class AllCoursesLoaded implements Action {
//   readonly type = CourseActionTypes.AllCoursesLoaded

//   constructor(public payload:Course[]) { }
// }

// export type CourseActions = LoadCourses | AllCoursesLoaded;



