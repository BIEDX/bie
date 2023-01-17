import { Role } from "./constants";

export interface RoutePath {
    layout?: string;
    path: string;
    title: string;
}

const ADMIN = [
    { path: '/admin/dashboard', title: 'Dashboard' },
    { path: '/admin/courses', title: 'Courses' },
    { path: '/admin/teacher', title: 'Teacher' },
    { path: '/admin/live-event', title: 'Live Event' },
];

const STUDENT = [
    { path: '/student/dashboard', title: 'Home' },
    // { path: '/student/blog', title: 'Blog' },
    // { path: '/student/course', title: 'Course' },
    { path: '/student/live-event', title: 'BIE CEM/USG Symposium 2023' },
];

const HOME = [
    { path: '/home', title: 'Home' },
    // { path: '/blog', title: 'Blog' },
    // { path: '/course-list', title: 'Course' },
    { path: '/bie-event', title: 'CEM/USG' },
]

export const navigations = (adminType: string): RoutePath[] => {
    switch (adminType) {
        case Role.Admin:
            return [
                ...ADMIN
            ] as RoutePath[];
        case Role.Student:
            return [
                ...STUDENT
            ] as RoutePath[];
        default:
            return [
                ...HOME,
            ] as RoutePath[];
    }
};