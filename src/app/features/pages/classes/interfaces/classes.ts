// AllMusclesResponse
export interface AllMusclesResponse {
  message: string;
  musclesGroup: AllMuscles[];
}
export interface AllMuscles {
  _id: string;
  name: string;
}
// MusclesResponse
export interface MusclesResponse {
  message: string;
  totalMuscles: number;
  muscles: Muscles[];
}
export interface Muscles {
  _id: string;
  name: string;
  image: null | string;
}
// DifficultylevelResponse
export interface DifficultylevelResponse {
  message: string;
  totalLevels: number;
  difficulty_levels: Difficultylevel[];
}
export interface Difficultylevel {
  id: string;
  name: string;
}
// ExerciseResponse
export interface ExerciseResponse {
  message: string;
  totalExercises: number;
  totalPages: number;
  currentPage: number;
  exercises: Exercise[];
}
export interface Exercise {
  _id: string;
  exercise: string;
  short_youtube_demonstration: null | string;
  in_depth_youtube_explanation: null | string;
  difficulty_level: string;
  target_muscle_group: string;
  prime_mover_muscle: string;
  primary_equipment: string;
  _primary_items: number;
  secondary_equipment: string;
  _secondary_items: number;
  posture: string;
  single_or_double_arm: string;
  continuous_or_alternating_arms: string;
  grip: string;
  load_position_ending: string;
  continuous_or_alternating_legs: string;
  foot_elevation: string;
  combination_exercises: string;
  movement_pattern_1: string;
  movement_pattern_2: null;
  movement_pattern_3: null;
  plane_of_motion_1: string;
  plane_of_motion_2: null;
  plane_of_motion_3: null;
  body_region: string;
  force_type: string;
  mechanics: string;
  laterality: string;
  primary_exercise_classification: string;
  short_youtube_demonstration_link: null | string;
  in_depth_youtube_explanation_link: null | string;
}
