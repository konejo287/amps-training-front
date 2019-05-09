import * as types from "./actionTypes";

export function createCourse(registry) {
    return { type: types.CREATE_COURSE, registry }
}