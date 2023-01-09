export interface TeacherInterface {
    phone: string,
    email: string,
    name: string,
    country: string,
    affiliation: string,
    id?: string,
}

export interface CourseInterface {
    diagnosisId: string,
    description: string,
    name: string,
    tags: string,
    teacherId: string,
    type: string,
    image: string,
    price: string,
    id?: string,
}
