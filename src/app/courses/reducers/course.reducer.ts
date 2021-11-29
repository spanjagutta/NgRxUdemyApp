import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { CourseActions } from '../action-types';
import { allCoursesLoaded } from '../course.actions';
import { compareCourses, Course } from '../model/course';


export interface CoursesState extends EntityState<Course> {
   allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses
});


export const coursesReducer = createReducer(
  adapter.getInitialState(),
  
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapter.addAll(action.courses, { ...state, allCoursesLoaded: true})),

  on(CourseActions.courseUpdated,
    (state, action) => adapter.updateOne(action.update, state))
)

// export function reducer(state = adapter.getInitialState(), action: Action): State {
//   switch (action.type) {

//     case "[Load Courses Effect] All Courses Loaded":
//       adapter.addAll(action["courses"], state);
//       break;

//     default:
//       return state;
//   }
// }


//const selectAll = adapter.getSelectors();

export const { selectAll } = adapter.getSelectors();
